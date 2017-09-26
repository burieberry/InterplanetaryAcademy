'use strict';
const db = require('../db');
const { Student, Campus } = db.models;

const seed = () => {
  return Promise.all([
    Student.create({ name: 'Eren', email: 'eren@mh.com' }),
    Student.create({ name: 'Mikasa', email: 'mikasa@mh.com' }),
    Student.create({ name: 'Armin', email: 'armin@mh.com' }),
    Student.create({ name: 'Annie', email: 'annie@mh.com' }),
    Student.create({ name: 'Erwin', email: 'erwin@mh.com' }),
    Campus.create({ name: 'Campus 1' }),
    Campus.create({ name: 'Campus 2' }),
    Campus.create({ name: 'Campus 3' }),
    Campus.create({ name: 'Campus 4' })
  ])
  .then(([ eren, mikasa, armin, annie, erwin, c1, c2, c3 ]) => {
    c1.addStudent(eren);
    c1.addStudent(mikasa);
    c2.addStudent(armin);
    c3.addStudent(erwin);
  })
};

const sync = () => {
  db.sync({ force: true })
    .then(seed)
};

sync();
