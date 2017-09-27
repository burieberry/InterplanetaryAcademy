'use strict';
const db = require('../db');
const { Student, Campus } = db.models;

const seed = () => {
  return Promise.all([
    Student.create({ name: 'Rick Sanchez', email: 'ricky@mhacademy.com' }),
    Student.create({ name: 'Morty Smith', email: 'morty@mhacademy.com' }),
    Student.create({ name: 'King Flippy Nips', email: 'kingflippy@mhacademy.com' }),
    Student.create({ name: 'Ma-Sha', email: 'ma-sha@mhacademy.com' }),
    Student.create({ name: 'Purge Planet Ruler', email: 'purge@mhacademy.com' }),
    Student.create({ name: 'Evil Rick', email: 'evilrick@mhacademy.com' }),
    Campus.create({ name: 'Earth', image: 'https://placeimg.com/400/250/arch' }),
    Campus.create({ name: 'Pluto', image: 'https://placeimg.com/400/250/arch' }),
    Campus.create({ name: 'Gazorpazorp', image: 'https://placeimg.com/400/250/arch' }),
    Campus.create({ name: 'Tiny Planet', image: 'https://placeimg.com/400/250/arch' }),
    Campus.create({ name: 'Hideout Planet', image: 'https://placeimg.com/400/250/arch' }),
    Campus.create({ name: 'Purge Planet', image: 'https://placeimg.com/400/250/arch' })
  ])
  .then(([ s1, s2, s3, s4, s5, s6, c1, c2, c3, c4, c5, c6 ]) => {
    c1.addStudent(s1);
    c1.addStudent(s2);
    c1.addStudent(s3);
    c2.addStudent(s3);
    c3.addStudent(s4);
    c5.addStudent(s6);
    c6.addStudent(s5);
  })
};

const sync = () => {
  db.sync({ force: true })
    .then(seed)
};

sync();
