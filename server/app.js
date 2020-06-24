const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const Reviews = require('../database/index.js')

const app = express();
const PUBLIC = path.resolve(__dirname, '..', 'client', 'public');

app.use(express.static(PUBLIC));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
      if (listing) {
        res.status(200).send(listing);
      } else {
        res.sendStatus(500);
      }
      // res.send(listing)
      // console.log(`here is the req param ${req.params.id}`);
      // console.log(`here is the listing ${listing}`)
      // res.status(200).send(listing);
    })

});

module.exports = app;
