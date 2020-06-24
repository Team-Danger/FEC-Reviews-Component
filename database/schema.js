const mongoose = require('mongoose');

require('./index.js')

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

module.exports = Reviews;