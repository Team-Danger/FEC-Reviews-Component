const { error } = require('console');
const express = require('express');

const Reviews = require('../database/schema.js');

const app = express();

app.get('/api/:id', (req, res) => {
  Reviews.findOne({ paddedId: req.params.id })
    .then((listing) => {
      if (listing) {
        res.status(200).send(listing);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      res.sendStatus(500);
      error(err)
    });
});

module.exports = app;