const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('../database/index.js');

app.get('/', (req, res) => {
  res.sendStatus(200);
})

app.get('/api/:id', (req, res) => {
  const paddedId = req.params.id;
  db.retrieveListing(paddedId, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(1314, () => {console.log('listening on')});

module.exports = app;
