const Reviews = require('./schema.js');

const seedEntry = require('./seedCreation.js');
const { connection } = require('mongoose');

const seed = (numberSeeds) => {
  const entriesList = [];

  for (let count = 1; count <= numberSeeds; count += 1) {
    entriesList.push(seedEntry(count));
  }

  Reviews.create(entriesList)
    .then(() => connection.close())
    .catch((err) => console.error(err));
}

seed(100);
