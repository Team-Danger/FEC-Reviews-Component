const request = require('supertest');
require('regenerator-runtime');

const app = require('../server/app.js');
const Reviews = require('../database/index.js');
const seedEntry = require('../database/seedCreation.js');

test('api should respond with right status code', async () => {
  await new Reviews(seedEntry(600));

  const promises = [
    request(app).get('/api/600')
      .then((res) => {
        expect(res.statusCode).toBe(200);
      }),
  ];

  return Promise.all(promises);
});
