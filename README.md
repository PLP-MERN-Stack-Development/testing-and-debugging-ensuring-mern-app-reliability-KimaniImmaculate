
# Bug Tracker (MERN)

A friendly, focused Bug Tracker built with the MERN stack (MongoDB, Express, React, Node.js). Use it to create, track, update, and close bugs with priority and status — perfect for demos, learning the MERN stack, or as a starting point for a production app.

**Table Of Contents**

- [Project Overview](#project-overview)
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Running The Project](#running-the-project)
- [Testing](#testing)
- [Debugging Tips](#debugging-tips)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License & Contact](#license--contact)

## Project Overview

This repository contains a simple but well-tested Bug Tracker application. It demonstrates a complete MERN flow:

- A React frontend (with an ErrorBoundary) for a smooth UX
- An Express + Node backend exposing RESTful CRUD endpoints
- Mongoose models for easy MongoDB integration
- Unit and integration tests (Jest + Supertest) to ensure reliability

Whether you're practicing testing, learning backend validation, or building a small project to extend, this app gives a tidy, practical starting point.

## Demo

Add a screenshot or GIF here to make the README pop. Example Markdown:

```markdown
![Demo Gif](assets/demo.gif)
```

If you don't have images in the repo yet, a brief animated GIF or a couple of screenshots make this README friendlier.

## Features

- Create bugs with title, description, priority, and status
- View, filter, and sort bugs in a list
- Update bug status (Open → In-Progress → Closed)
- Delete bugs when they're resolved
- Frontend `ErrorBoundary` to prevent UI crashes
- Backend validations and centralized error handling
- Unit tests for helpers and integration tests for routes

## Tech Stack

- Frontend: React (Create React App) — `client/`
- Backend: Node.js + Express — `server/`
- Database: MongoDB (Mongoose models in `server/src/models`)
- Testing: Jest, Supertest

## Prerequisites

- Node.js (14+ recommended)
- npm (bundled with Node.js) or `pnpm`/`yarn`
- MongoDB running locally OR a connection URI (Atlas or local)

## Quick Start

Clone the repo and install dependencies for both server and client:

```powershell
git clone https://github.com/your-username/bug-tracker.git
cd bug-tracker

# Install backend deps
cd server
npm install

# In a new terminal: install frontend deps
cd ..\client
npm install
```

## Environment Variables

Create a `.env` file in the `server/` folder. Minimal example:

```ini
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/bugtracker
# Optionally: MONGO_URI_TEST=mongodb://127.0.0.1:27017/bugtracker_test
```

If you omit `MONGO_URI`, the app will try to connect to a default local MongoDB instance.

## Running The Project

Start the backend (dev mode):

```powershell
cd server
npm run dev
```

Start the frontend (separate terminal):

```powershell
cd client
npm start
```

Frontend: `http://localhost:3000` — Backend: `http://localhost:5000` (unless `PORT` changed)

## Testing

Run backend tests (Jest + Supertest):

```powershell
cd server
npm test
```

Run frontend tests (React Testing Library / Jest):

```powershell
cd client
npm test
```

The backend includes unit tests for helper functions and integration tests for CRUD endpoints against a test database (e.g., `bugtracker_test`).

## Debugging Tips

- Use `console.log` sparingly to inspect request bodies and responses.
- Chrome DevTools for React component state and network traces.
- Use the Node inspector or VS Code debugger to step through route handlers.
- The frontend `ErrorBoundary` provides a safe fallback — add more logging inside it to capture unexpected errors.

## Project Structure

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
│     │  └─ StatusBadge.jsx
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

## API Endpoints

All API endpoints are rooted at the server base (by default `http://localhost:5000`). Key routes in `server/src/routes/bugRoutes.js`:

- `GET /api/bugs` — Get all bugs
- `POST /api/bugs` — Create a new bug (body: `title`, `description`, `priority`, `status`)
- `GET /api/bugs/:id` — Get a single bug by id
- `PUT /api/bugs/:id` — Update a bug
- `DELETE /api/bugs/:id` — Delete a bug

The backend validates inputs and returns appropriate HTTP status codes (e.g., `400` for bad requests).

## Contributing

Contributions, bug reports, and PRs are welcome. Good ways to help:

1. Open an issue describing the bug or feature
2. Fork and create a branch: `git checkout -b feat/my-feature`
3. Add tests for new behavior
4. Open a pull request with a clear description

Be kind and keep commit messages descriptive.






