'use strict';
const expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../server');
const agent = supertest.agent(app);

describe('GET /', function() {
  it('responds with 200', function(done) {
    agent
      .get('/')
      .expect(200, done);
  });
});

// describe('GET /api/campuses', function() {
//   it('responds with 200', function(done) {
//     agent
//       .get('/api/campuses')
//       .expect(200, done);
//   });
// });
