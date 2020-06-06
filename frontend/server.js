// server.js
// const mongo = require('mongodb');
const express = require('express');
const http = require('http')
const path = require('path')
const app = express();
require('dotenv').config();

const port = process.env.PORT || 4800;
app.use(express.static(path.join(__dirname, '/dist/frontend')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname))
});

const server = http.createServer(app);
server.listen(port, () => console.log("Running"))
