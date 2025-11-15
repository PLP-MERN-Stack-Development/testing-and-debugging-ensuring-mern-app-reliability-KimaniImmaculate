const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const Bug = require('../../src/models/Bug');

const mongoURI = 'mongodb://127.0.0.1:27017/bugtracker_test';

beforeAll(async () => {
  // Connect only if not already connected
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
});

afterAll(async () => {
  await mongoose.connection.dropDatabase(); // Clean test DB
  await mongoose.connection.close();
});

beforeEach(async () => {
  await Bug.deleteMany(); // Clear bugs before each test
});

describe('Bug API Endpoints', () => {
  let bugId;

  test('POST /api/bugs - create bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'Test Bug', description: 'Bug description', status: 'open', priority: 'low' });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Bug');
    bugId = res.body._id;
  });

  test('GET /api/bugs - get all bugs', async () => {
    await Bug.create({ title: 'Bug 1', description: 'Desc', status: 'open', priority: 'low' });
    const res = await request(app).get('/api/bugs');

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });

  test('GET /api/bugs/:id - get bug by ID', async () => {
    const bug = await Bug.create({ title: 'Bug 2', description: 'Desc', status: 'open', priority: 'low' });
    const res = await request(app).get(`/api/bugs/${bug._id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Bug 2');
  });

  test('PUT /api/bugs/:id - update bug', async () => {
    const bug = await Bug.create({ title: 'Bug 3', description: 'Desc', status: 'open', priority: 'low' });
    const res = await request(app)
      .put(`/api/bugs/${bug._id}`)
      .send({ status: 'in-progress' });

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('in-progress');
  });

  test('DELETE /api/bugs/:id - delete bug', async () => {
    const bug = await Bug.create({ title: 'Bug 4', description: 'Desc', status: 'open', priority: 'low' });
    const res = await request(app).delete(`/api/bugs/${bug._id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Bug deleted');
  });
});

