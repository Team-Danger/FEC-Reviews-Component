const app = require('./index.js')

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

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});