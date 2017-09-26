'use strict';
const expect = require('chai').expect;
const supertest = require('supertest');
const app = supertest.agent(require('../server'));

describe('GET /', () => {
  it('responds with 200', () => {
    app.get('/')
      .expect(200);
  });
});

describe('GET /api/campuses', () => {
  it('responds with 200', () => {
    return app.get('/api/campuses')
      .expect(200);
  });

  it('should include Campus 2', () => {
    return app.get('/api/campuses')
      .expect(res => {
        expect(res.text).to.contain('Campus 2');
      })
  })
});

describe('GET /api/campuses/1', () => {
  it('gets campus with id 1', () => {
    return app.get('/api/campuses/1')
      .expect(res => {
        var campusName = res.body.name;
        expect(campusName).to.equal('Campus 1');
      })
  });
});

describe('GET /api/students', () => {
  it('responds with 200', () => {
    return app.get('/api/students')
      .expect(200);
  });

  it('should include Mikasa', () => {
    return app.get('/api/students')
      .expect(res => {
        expect(res.text).to.contain('Mikasa');
      })
  })
});

describe('GET /api/students/1', () => {
  it('gets student with id 1', () => {
    return app.get('/api/students/1')
      .expect(res => {
        var studentName = res.body.name;
        expect(studentName).to.equal('Eren');
      })
  });
});

describe('POST /api/campuses', () => {
  it('returns the new campus', () => {
    const campus = { id: 777, name: 'Campus 777' };
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
    const student = { id: 777, name: 'Sasha', campusId: 2 };
    return app.post('/api/students')
      .send(student)
      .expect(201)
      .then(res => {
        expect(res.body.name).to.equal(student.name)
      })
  });
});

describe('PUT /api/campuses/:id', () => {
  it('can update campus name', () => {
    const campus = { id: 777, name: 'Campus 888' };
    return app.put(`/api/campuses/${campus.id}`)
      .send(campus)
      .expect(200)
      .then(res => {
        expect(res.body.name).to.equal(campus.name);
      })
  });
});

describe('PUT /api/students/:id', () => {
  it('can update student name', () => {
    const student = { id: 777, name: 'Sashir' };
    return app.put(`/api/students/${student.id}`)
      .send(student)
      .expect(200)
      .then(res => {
        expect(res.body.name).to.equal(student.name);
      })
  });

  it('can update student email', () => {
    const student = { id: 777, email: 'sashir@mh.com' };
    return app.put(`/api/students/${student.id}`)
      .send(student)
      .expect(200)
      .then(res => {
        expect(res.body.email).to.equal(student.email);
      })
  });

  it('can update student name and email', () => {
    const student = { id: 777, name: 'Zate', email: 'zate@mh.com' };
    return app.put(`/api/students/${student.id}`)
      .send(student)
      .expect(200)
      .then(res => {
        expect(res.body.name).to.equal(student.name);
        expect(res.body.email).to.equal(student.email);
      })
  });

  it('can update student campus id', () => {
    const student = { id: 777, name: 'Guillome', email: 'guillome@mh.com', campusId: 4 };
    return app.put(`/api/students/${student.id}`)
      .send(student)
      .expect(200)
      .then(res => {
        expect(res.body.campusId).to.equal(student.campusId);
      })
  });
})

describe('DELETE /api/campuses/:id', () => {
  it('returns 204', () => {
    const campus = { id: 777 };
    return app.delete(`/api/campuses/${campus.id}`)
      .expect(204)
  });

  it('deletes campus', () => {
    const campus = { id: 999,  name: 'Campus Very New' };
    return app.post('/api/campuses')
      .send(campus)
      .then((res) => {
        expect(res.body.name).to.equal(campus.name);
        return app.delete(`/api/campuses/${campus.id}`)
      })
      .then(() => {
        return app.get('/api/campuses');
      })
      .then(campuses => {
        expect(campuses.text).to.contain('Campus 2');
        expect(campuses.text).not.to.contain(campus.name);
      })
  });
});

describe('DELETE /api/students/:id', () => {
  it('returns 204', () => {
    const student = { id: 777 };
    return app.delete(`/api/students/${student.id}`)
      .expect(204)
  });

  it('deletes student', () => {
    const student = { id: 999,  name: 'Zero' };
    return app.post('/api/students')
      .send(student)
      .then((res) => {
        expect(res.body.name).to.equal(student.name);
        return app.delete(`/api/students/${student.id}`)
      })
      .then(() => {
        return app.get('/api/students');
      })
      .then(students => {
        expect(students.text).to.contain('Eren');
        expect(students.text).not.to.contain(student.name);
      })
  });
});
