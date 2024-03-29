// server.js

// load express as a deoendency
const express = require("express");

// Define Express App
const app = express();

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' http://localhost:5000; font-src 'self' https://cdn.jsdelivr.net https://fonts.googleapis.com; img-src 'self'; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' https://cdn.jsdelivr.net; frame-src 'self'"
  );
  next();
});

// Define the server host IP and port
const HOST = "127.0.0.1";
// if port defined in ENV, use that value, otherwise 3000
const PORT = process.env.PORT || 3000;

// Serve static content from the public folder
app.use(express.static("public"));

// Start the server and listen for requests
app.listen(PORT, HOST, () => {
  console.log(`Server connected at http://${HOST}:${PORT}`);
});
