const supertest = require('supertest');
const mongoose = require('mongoose');

const seedEntry = require('../database/seedCreation.js');
const db = require('../database/index.js');
const app = require('../server/index.js');

const database = 'fecReviews';
const request = supertest(app);

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${database}`;
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.db.dropCollection('reviews');
  await mongoose.connection.close();
});

describe('Seeding Script Tests', () => {
  test('paddedId in seeds should be length 3 and padded with appropriate 0s in front', () => {
    const seedOne = seedEntry(1);
    const seedTens = seedEntry(10);
    const seedHundred = seedEntry(100);

    expect(seedOne.padded_id).toBe('001');
    expect(seedTens.padded_id).toBe('010');
    expect(seedHundred.padded_id).toBe('100');
  });

  it('Seeds can be loaded onto database and are retrievable', async (done) => {
    db.insertSampleData(seedEntry(1));

    await db.retrieveListing('001', (err, result) => {
      expect(result).toBeTruthy();

      done();
    });
  });
});

describe('Server path test', () => {
  test('Server should response to GET request', async (done) => {
    const response = await request.get('/api/:id');

    expect(response.status).toBe(200);
    done();
  });
});
