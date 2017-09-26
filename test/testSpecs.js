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
    return app.get('/api/campuses')
      .expect(200);
  });

  it('should include Campus 2', function() {
    return app.get('/api/campuses')
      .expect(function(res) {
        expect(res.text).to.contain('Campus 2');
      })
  })
});

describe('GET /api/campuses/1', function() {
  it('gets campus with id 1', function() {
    return app.get('/api/campuses/1')
      .expect(res => {
        var campusName = res.body.name;
        expect(campusName).to.equal('Campus 1');
      })
  });
});

describe('GET /api/students', function() {
  it('responds with 200', function() {
    return app.get('/api/students')
      .expect(200);
  });

  it('should include Mikasa', function() {
    return app.get('/api/students')
      .expect(function(res) {
        expect(res.text).to.contain('Mikasa');
      })
  })
});

describe('GET /api/students/1', function() {
  it('gets student with id 1', function() {
    return app.get('/api/students/1')
      .expect(res => {
        var studentName = res.body.name;
        expect(studentName).to.equal('Eren');
      })
  });
});

describe('POST /api/campuses', () => {
  it('returns the new campus', () => {
    const campus = { name: 'Campus New' };
    return app.post('/api/campuses')
      .send(campus)
      .expect(201)
      .then(res => {
        expect(res.body.name).to.equal(campus.name);
      })
  });
});

describe('POST /api/students', () => {
  it('returns the new student', () => {
    const student = { name: 'Sasha', campusId: 2 };
    return app.post('/api/students')
      .send(student)
      .expect(201)
      .then(res => {
        expect(res.body.name).to.equal(student.name)
      })
  });
});
