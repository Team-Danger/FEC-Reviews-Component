const Promise = require('bluebird');

const mongoose = require('mongoose');

Promise.promisifyAll(mongoose);

mongoose.connect('mongodb://localhost/fecReviews', { useNewUrlParser: true, useUnifiedTopology: true });

const reviewSchema = new mongoose.Schema({
  padded_id: String,
  user_dp: String,
  user_name: String,
  avg: String,
  review_size: Number,
  clean_avg: Number,
  comm_avg: Number,
  accuracy_avg: Number,
  value_avg: Number,
  checkin_avg: Number,
  location_avg: Number,
  reviews: Array,
});

const Reviews = mongoose.model('Reviews', reviewSchema);

const insertSampleData = (entry) => {
  Reviews.create(entry);
};

module.exports = Reviews;
module.exports = insertSampleData;