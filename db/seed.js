'use strict';
const { Student, Campus } = require('./index').models;

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
    eren.addCampus(c1);
    mikasa.addCampus(c1);
    armin.addCampus(c2);
    annie.addCampus(c3);
  })
  .catch(err => console.log(err));
};

const sync = () => {
  db.sync({ force: true })
    .then(seed)
    .catch(err => console.log(err));
};

sync();
