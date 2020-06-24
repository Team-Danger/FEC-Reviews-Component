const supertest = require('supertest');

const app = require('../server/app.js');

const regeneratorRuntime = require('regenerator-runtime'); // babel needs this line here to play nice

const request = supertest(app);

describe('Server path test', () => {
  test('Server should response to GET request', async (done) => {
    const response = await request.get('/api/:id');

    expect(response.status).toBe(200);
    done();
  });
});
