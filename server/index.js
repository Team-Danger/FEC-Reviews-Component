const express = require('express');

const bodyParser = require('body-parser');

const db = require('../database/index.js');

const app = express();
const PORT = 1314;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;
