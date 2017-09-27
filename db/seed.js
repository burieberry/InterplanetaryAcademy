'use strict';
const db = require('../db');
const { Student, Campus } = db.models;

const seed = () => {
  return Promise.all([
    Student.create({ name: 'Eren', email: 'eren@mhacademy.com' }),
    Student.create({ name: 'Mikasa', email: 'mikasa@mhacademy.com' }),
    Student.create({ name: 'Armin', email: 'armin@mhacademy.com' }),
    Student.create({ name: 'Annie', email: 'annie@mhacademy.com' }),
    Student.create({ name: 'Erwin', email: 'erwin@mhacademy.com' }),
    Campus.create({ name: 'Earth', image: 'https://placeimg.com/400/250/arch' }),
    Campus.create({ name: 'Moon', image: 'https://placeimg.com/400/250/arch' }),
    Campus.create({ name: 'Mars', image: 'https://placeimg.com/400/250/arch' }),
    Campus.create({ name: 'Pluto', image: 'https://placeimg.com/400/250/arch' }),
    Campus.create({ name: 'Jupiter', image: 'https://placeimg.com/400/250/arch' }),
    Campus.create({ name: 'Venus', image: 'https://placeimg.com/400/250/arch' })
  ])
  .then(([ s1, s2, s3, s4, s5, c1, c2, c3, c4 ]) => {
    c1.addStudent(s1);
    c1.addStudent(s2);
    c2.addStudent(s3);
    c3.addStudent(s4);
    c4.addStudent(s5);
  })
};

const sync = () => {
  db.sync({ force: true })
    .then(seed)
};

sync();
