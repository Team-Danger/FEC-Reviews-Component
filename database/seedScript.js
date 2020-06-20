const db = require('../database/index.js');

const seedEntry = require('./seedCreation.js');

for (let count = 1; count < 101; count += 1) {
  db.insertSampleData(seedEntry(count));
}
