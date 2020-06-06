// server.js
var mongo = require('mongodb');
var express = require('express');
var app = express();
var router = express.Router();
require('dotenv').config();

app.listen(4800, function() {
  console.log("== Server is running on port", process.env.PORT);
})
