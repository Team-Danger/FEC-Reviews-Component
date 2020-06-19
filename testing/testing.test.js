const { TestScheduler } = require('jest');

const seedEntry = require('../database/seedCreation.js');

test('Seed Object should match datatypes in schema', () => {
  const seedOne = seedEntry(1);

  expect(seedOne.constructor).toBe(Object);
  expect(typeof seedOne.user_dp).toBe('string');
  expect(typeof seedOne.user_name).toBe('string');
  expect(typeof seedOne.review_size).toBe('number');
  expect(typeof seedOne.clean_avg).toBe('number');
  expect(typeof seedOne.comm_avg).toBe('number');
  expect(typeof seedOne.location_avg).toBe('number');
  expect(typeof seedOne.checkin_avg).toBe('number');
  expect(seedOne.reviews.constructor).toBe(Array);
});

test('paddedId in seeds should be length 3 and padded with appropriate 0s in front', () => {
  const seedOne = seedEntry(1);
  const seedTens = seedEntry(10);
  const seedHundred = seedEntry(100);

  expect(seedOne.padded_id).toBe('001');
  expect(seedTens.padded_id).toBe('010');
  expect(seedHundred.padded_id).toBe('100');
});
