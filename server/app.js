const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const Reviews = require('../database/index.js')

const app = express();
const PUBLIC = path.resolve(__dirname, '..', 'client', 'public');

app.use(express.static(PUBLIC));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const retrieveListing = require('../database/retrieveListing.js')

app.get('/api/:id', (req, res) => {
  // const paddedId = req.params.id;
  // retrieveListing(paddedId, (err, data) => {
  //   if (err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.status(200).send(data);
  //   }
  // });
  Reviews.findOne({paddedId: req.params.id})
    .then((listing) => {
      res.status(200).send(listing);
    })
    .catch((err) => {
      res.sendStatus(500)
    })

});

module.exports = app;
