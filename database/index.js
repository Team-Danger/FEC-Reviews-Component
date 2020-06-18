const mongoose = require('mongoose');
const mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/fecReviews');

const db = mongoose.connection;

const reviewSchema = new mongoose.Schema({
  padded_id: String,
  user_dp: String,
  avg: Number,
  clean_avg: Number,
  comm_avg: Number,
  accuracy_avg: Number,
  value_avg: Number,
  checkin_avg: Number,
  location_avg: Number,
  reviews: Array
})

let Reviews = mongoose.model('Reviews', reviewSchema)

const insertSampleData = entry => {
  Reviews.create(entry)
    .catch(err => console.log('error: ', err))
}