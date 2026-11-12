# Week 1 — Express Server with Health Check

A simple Node.js server built with Express.js.  
It includes a basic health-check endpoint to verify that the server is running correctly.

## Features

- Node.js and Express.js based server
- Health-check endpoint at `/health`
- Returns server status, uptime, and timestamp
- Easy to run locally

## Requirements

Make sure the following are installed:

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

Check installation:

```bash
node -v
npm -v
```

## Project Setup

1. Open the project folder in VS Code or terminal.

```bash
cd D:\projects\internship\Week1
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node server.js
```

Or, if a start script is configured:

```bash
npm start
```

The server will run on:

```text
http://localhost:5050
```

## API Endpoints

### Health Check

```http
GET /health
```

This endpoint checks whether the server is running.

Example:

```text
http://localhost:5050/health
```

Expected response:

```json
{
  "status": "ok",
  "uptime": 12.345,
  "timestamp": "2026-11-12T15:30:00.000Z"
}
```

### Root Route

```http
GET /
```

Example:

```text
http://localhost:5050/
```

Expected response:

```text
Server is running
```

## Server Code

```js
const express = require("express");

const app = express();
const port = process.env.PORT || 5050;

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

## How It Works

- Express creates the server application using `express()`.
- `app.get("/health", ...)` defines a GET route for health checks.
- `res.status(200)` sends a successful HTTP response.
- `res.json()` returns JSON data.
- `process.uptime()` shows how long the server has been running.
- `app.listen(port)` starts the server on the given port.

## Testing the Health Check

After starting the server, open this URL in a browser:

```text
http://localhost:5050/health
```

Or test it using PowerShell:

```powershell
curl http://localhost:5050/health
```

Expected result:

```text
{"status":"ok","uptime":12.345,"timestamp":"2026-11-12T15:30:00.000Z"}
```

## Stopping the Server

Press:

```text
Ctrl + C
```

in the terminal to stop the server.

## Notes

- The health-check endpoint is commonly used by monitoring systems to confirm that an application is running.
- A `200 OK` response means the server is healthy.
- This basic health check only verifies that the server is running; it does not check external services such as a database.
