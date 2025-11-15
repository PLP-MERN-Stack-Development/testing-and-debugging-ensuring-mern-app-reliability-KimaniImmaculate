// app.js
const express = require('express');
const bugRoutes = require('./src/routes/bugRoutes');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/bugs', bugRoutes);

module.exports = app;






