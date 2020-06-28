const path = require('path');
const express = require('express');
const app = require('./app');
require('../database/index.js');

const PORT = process.env.PORT || 3000;

const PUBLIC = path.resolve(__dirname, '..', 'client', 'public');

app.use(express.static(PUBLIC));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening in port: ${PORT}`);
});
