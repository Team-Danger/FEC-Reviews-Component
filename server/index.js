const express = require('express');

const bodyParser = require('body-parser');

const db = require('../database/index.js');

const app = express();
const PORT = 1314;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/:id', (req, res) => {
  const paddedId = req.params.id;
  db.retrieveListing(paddedId, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});