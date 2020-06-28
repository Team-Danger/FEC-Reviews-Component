const request = require('supertest');

const app = require('../server/app.js');

require('babel-polyfill');

describe('API tests', () => {
  it('Should get a response given a good GET request', async (done) => {
    await request(app)
      .get('/api/001')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
    done();
  }, 90000);

  it('Should get a response given a bad GET request', async (done) => {
    await request(app)
      .get('/api/invalidId')
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
    done();
  }, 90000);
});
