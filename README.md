# Bug Tracker (MERN)

A simple Bug Tracker application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, read, update, and delete bugs, with priority and status tracking. This repository contains a fully-tested backend, a React frontend wrapped with an ErrorBoundary, and documentation to get you started.

**Table of contents**

- **Project Overview**: Quick summary and features
- **Tech Stack**: Technologies used
- **Prerequisites**: System requirements
- **Installation**: How to install dependencies
- **Environment Variables**: .env example
- **Running the Project**: Start backend and frontend
- **Testing**: How to run unit & integration tests
- **Debugging**: Tips and common techniques
- **Project Structure**: Repository layout
- **API Endpoints**: Brief summary of server routes

**Project Overview**

This Bug Tracker is a small CRUD application supporting:

- Create bugs with title, description, priority, and status
- View all bugs in a list
- Update bug status (open, in-progress, closed)
- Delete bugs
- Frontend ErrorBoundary to gracefully handle runtime errors
- Backend tests (Jest + Supertest) covering helpers and routes

**Tech Stack**

- **Frontend**: React (Create React App) — `client/`
- **Backend**: Node.js + Express — `server/`
- **Database**: MongoDB (Mongoose models in `server/src/models`)
- **Testing**: Jest, Supertest

**Prerequisites**

- Node.js (14+ recommended)
- npm (comes with Node)
- MongoDB running locally or a connection URI

**Installation**

1. Clone the repository

```bash
git clone https://github.com/your-username/bug-tracker.git
cd bug-tracker
```

2. Install dependencies

- Backend

```bash
cd server
npm install
```

- Frontend

```bash
cd ../client
npm install
```

**Environment Variables**

Create a `.env` file in the `server/` folder (optional). Example:

```ini
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/bugtracker
# For tests you may use: mongodb://127.0.0.1:27017/bugtracker_test
```

If you don't provide `MONGO_URI`, the app may attempt to connect to the default MongoDB instance.

**Running the Project**

- Start Backend (development with nodemon if configured)

```bash
cd server
npm run dev
```

The server runs on `http://localhost:5000` by default (see `PORT`).

- Start Frontend

```bash
cd client
npm start
```

The React app runs on `http://localhost:3000` by default.

**Testing**

- Backend tests (Jest + Supertest)

```bash
cd server
npm test
```

The backend uses unit tests for helper functions and integration tests for API endpoints (POST, GET, PUT, DELETE) against a test database (e.g., `bugtracker_test`).

- Frontend tests (React Testing Library / Jest)

```bash
cd client
npm test
```

**Debugging Techniques**

- **Console logs**: Frontend fetch functions and server routes use console logs for quick verification.
- **Chrome DevTools**: Inspect network requests, responses, and component state for the frontend.
- **Node Inspector / VS Code Debugger**: Set breakpoints in backend routes to inspect request/response and DB operations.
- **ErrorBoundary**: Frontend `ErrorBoundary` component catches runtime errors and displays a fallback UI instead of crashing the whole app.

**Project Structure**

```
bug-tracker/
│
├─ client/             # React frontend
│  ├─ package.json
│  └─ src/
│     ├─ App.jsx
│     ├─ index.js
│     ├─ components/
│     │  ├─ BugForm.jsx
│     │  ├─ BugItem.jsx
│     │  ├─ BugList.jsx
│     │  ├─ DeleteButton.jsx
│     │  ├─ ErrorBoundary.jsx
│     │  └─ StatusBadge.test.jsx
│     ├─ middleware/
│     │  └─ errorHandler.js
│     └─ tests/
│        ├─ integration/
│        │  └─ BugList.test.jsx
│        └─ unit/
│           ├─ BugForm.test.jsx
│           └─ BugItem.test.jsx
│
├─ server/             # Express backend
│  ├─ package.json
│  ├─ app.js
│  ├─ server.js
│  ├─ src/
│  │  ├─ controllers/
│  │  │  └─ bugController.js
│  │  ├─ middleware/
│  │  │  └─ errorHandler.js
│  │  ├─ models/
│  │  │  └─ Bug.js
│  │  ├─ routes/
│  │  │  └─ bugRoutes.js
│  │  └─ utils/
│  │     └─ bugHelpers.js
│  └─ tests/
│     ├─ integration/
│     │  └─ bug.test.js
│     └─ unit/
│        └─ bugHelpers.test.js
│
└─ README.md
```

**API Endpoints (server)**

All API endpoints are available under the server base (default `http://localhost:5000`). Example routes implemented in `server/src/routes/bugRoutes.js`:

- `GET /api/bugs` — Get all bugs
- `POST /api/bugs` — Create a new bug (body: `title`, `description`, `priority`, `status`)
- `GET /api/bugs/:id` — Get a single bug by id
- `PUT /api/bugs/:id` — Update a bug
- `DELETE /api/bugs/:id` — Delete a bug

The backend validates input and returns appropriate HTTP status codes (e.g., `400` for bad requests).

**Error Handling**

- Frontend: Wraps components with `ErrorBoundary` to catch rendering/runtime errors and show a user-friendly fallback.
- Backend: Central error handler (`server/src/middleware/errorHandler.js`) formats errors and sends proper status codes.

**Contributing**

Contributions, bug reports, and pull requests are welcome. Typical workflow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Add tests when relevant
4. Open a pull request describing changes





