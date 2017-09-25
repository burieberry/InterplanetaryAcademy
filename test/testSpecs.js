'use strict';
const expect = require('chai').expect;
const supertest = require('supertest');
const app = supertest.agent(require('../server'));

describe('GET /', function() {
  it('responds with 200', function() {
    app.get('/')
      .expect(200);
  });
});

describe('GET /api/campuses', function() {
  it('responds with 200', function() {
    app.get('/api/campuses')
      .expect(200);
  });

  it('should return correct number of campuses', function() {
    app.get('/api/campuses')
      .expect(function(res) {
        var numCampuses = res.body.length;
        expect(numCampuses).to.equal(4);
      })
  })
});

describe('GET /api/campuses/1', function() {
  it('gets campus with id 1', function() {
    app.get('/api/campuses/1')
      .expect(res => {
        var campusName = res.body.name;
        expect(campusName).to.equal('Campus 1');
      })
  });
});

describe('GET /api/students', function() {
  it('responds with 200', function() {
    app.get('/api/students')
      .expect(200);
  });

  it('should return correct number of students', function() {
    app.get('/api/students')
      .expect(function(res) {
        var numStudents = res.body.length;
        expect(numStudents).to.equal(5);
      })
  })
});

describe('GET /api/students/1', function() {
  it('gets student with id 1', function() {
    app.get('/api/students/1')
      .expect(res => {
        var studentName = res.body.name;
        expect(studentName).to.equal('Eren');
      })
  });
});
