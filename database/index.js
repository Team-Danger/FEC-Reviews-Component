const Promise = require('bluebird');

const mongoose = require('mongoose');

Promise.promisifyAll(mongoose);

mongoose.connect('mongodb://localhost/fecReviews', { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {console.log('DB connected')})
  .catch((err) => {console.log(Error, err.message)});

const reviewSchema = new mongoose.Schema({
  date: Date,
  paddedId: String,
  userDp: String,
  userName: String,
  avg: String,
  reviewSize: Number,
  cleanAvg: Number,
  commAvg: Number,
  accuracyAvg: Number,
  valuAvg: Number,
  checkinAvg: Number,
  locationAvg: Number,
  reviews: Array,
});

const Reviews = mongoose.model('Reviews', reviewSchema);

const insertSampleData = (entry) => {
  Reviews.create(entry);
};

module.exports = { Reviews, insertSampleData };
