const { fail } = require('assert');
const seedEntry = require('../database/seedCreation.js');
const db = require('../database/index.js');

test('Seeded object should be valid', () => {
  const testEntry = new db.Reviews(seedEntry(1));

  return testEntry.validate()
    .then((err) => {
      expect(err).toBe(undefined);
    })
    .catch((err) => {
      fail(err);
    });
});

test('paddedId in seeds should be length 3 and padded with appropriate 0s in front', () => {
  const seedOne = seedEntry(1);
  const seedTens = seedEntry(10);
  const seedHundred = seedEntry(100);

  expect(seedOne.padded_id).toBe('001');
  expect(seedTens.padded_id).toBe('010');
  expect(seedHundred.padded_id).toBe('100');
});
