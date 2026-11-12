<div align="center">

# Week 1 — Express Server with Health Check

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Health Check](https://img.shields.io/badge/Health_Check-Active-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

A simple Node.js server built with **Express.js**.  
It includes a basic health-check endpoint to verify that the server is running correctly.

</div>

## Features

- Node.js and Express.js based server
- Health-check endpoint at `/health`
- Returns server status, uptime, and timestamp
- Easy to run locally

## Requirements

- [Node.js](https://nodejs.org/)
- npm

Check installation:

```bash
node -v
npm -v
```

## Project Setup

```bash
cd D:\projects\internship\Week1
npm install
node server.js
```

Server will run on:

```text
http://localhost:5050
```

## API Endpoints

### Health Check

```http
GET /health
```

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
    timestamp: new Date().toISOString()
  });
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

## Testing

Browser:

```text
http://localhost:5050/health
```

PowerShell:

```powershell
curl http://localhost:5050/health
```

## Stopping the Server

Press:

```text
Ctrl + C
```

## License

This project is licensed under the MIT License.