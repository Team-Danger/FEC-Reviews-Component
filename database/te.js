const Reviews = require('./index.js');
const seedEntry = require('./seedCreation.js');

const test = new Reviews(seedEntry(500));

Reviews.findOne = ({entry}) => {
  return new Promise((resolve, reject) => {
    if (entry.paddedId === '500') {
      resolve(test)
    } else {
      console.log('err')
    }
  })
}

console.log(test);