const { Reviews } = require('./index.js')

const retrieveListing = (id, cb) => {
  Reviews.find({ paddedId: id })
    .then((results) => {
      cb(null, results);
    })
    .catch((err) => {
      cb(err);
    });
};

module.exports = retrieveListing;