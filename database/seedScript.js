const insertSampleData = require('./index.js');

const seedEntry = require('./seedCreation.js');

for (let count = 1; count < 101; count += 1) {
  insertSampleData(seedEntry(count));
}
