const request = require('supertest');

const app = require('../server/app.js');

require('babel-polyfill');

// let server, agent;

// beforeEach((done) => {
//     server = app.listen(4000, (err) => {
//       if (err) return done(err);

//        agent = request.agent(server); // since the application is already listening, it should use the allocated port
//        done();
//     });
// });

// afterEach((done) => {
//   return  server && server.close(done);
// });

describe('API tests', () => {
  it('Should get a response given a good GET request', async () => {
    // return request(app)
    //   .get('/api/001')
    //   .then(response => {
    //     // console.log(`goodget: ${response.body}`)
    //     expect(response.statusCode).toBe(200);
    //   });
    const response = await request(app).get('/api/001')
    expect(response.statusCode).toBe(200);
  }, 90000);


  it('Should 500 a bad GET request', async () => {
    // return request(app)
    //   .get('/api/dakljfh;hfegdskaf')
    //   .then(res => {
    //     expect(res.statusCode).toBe(500);
    //   })
    const response = await request(app).get('/api/adflhie')
    expect(response.statusCode).toBe(500)
  }, 90000);
});