// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Server is running successfully!');
// });

// app.listen(3000, () => {
//   console.log('✅ Server started on http://localhost:3000');
// });

// const express = require("express");
// const app = express();
// const PORT = 5000;

// app.get("/api/hello", (req, res) => {
//   res.send("Hello from Express backend!");
// });

// // app.use(express.json());

// // app.get("/", (req, res) => {
// //   res.send("Backend is running!");
// // });

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// // chat gpt part to connect frontend with backend
// app.get("/api/hello", (req, res) => {
//   res.send("Hello from Express backend!");
// });


import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from frontend build folder
// app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use(express.static(path.join(__dirname, "../frontend/build")));


app.get("/api/hello", (req, res) => {
  res.send("Hello from Express backend!");
});

// For any other route, serve frontend index.html
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
// });
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

