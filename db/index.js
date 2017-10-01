'use strict';
const conn = require('./conn');
const Student = require('./Student'),
      Campus = require('./Campus');

// Associations
Campus.hasMany(Student);
Student.belongsTo(Campus);

const seed = () => {
  return Promise.all([
    Student.create({ name: 'Rick Sanchez', email: 'ricky@mhacademy.com' }),
    Student.create({ name: 'Morty Smith', email: 'morty@mhacademy.com' }),
    Student.create({ name: 'Summer Smith', email: 'summer@mhacademy.com' }),
    Student.create({ name: 'King Flippy', email: 'kingflippy@mhacademy.com' }),
    Student.create({ name: 'Evil Rick', email: 'evilrick@mhacademy.com' }),
    Student.create({ name: 'Krombopulos Michael', email: 'michael@mhacademy.com' }),
    Student.create({ name: 'Purge Planet Ruler', email: 'purge@mhacademy.com' }),
    Campus.create({ name: 'Earth', image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/f/fc/S2e5_Earth.png/revision/latest/scale-to-width-down/1024?cb=20160926065208' }),
    Campus.create({ name: 'Pluto', image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/3/35/Pluto.png/revision/latest/scale-to-width-down/800?cb=20150929103139' }),
    Campus.create({ name: 'Hideout Planet', image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/e/e1/S1e10_hideout_planet.png/revision/latest/scale-to-width-down/1280?cb=20160911012541' }),
    Campus.create({ name: 'Distant Planet', image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/a/a3/S2e2_distant_planet.png/revision/latest/scale-to-width-down/1024?cb=20160919233246' }),
    Campus.create({ name: 'Purge Planet', image: 'https://vignette3.wikia.nocookie.net/rickandmorty/images/5/50/Wiki-background/revision/latest?cb=20170725191855' }),
    Campus.create({ name: 'Parblesnops', image: 'https://i.pinimg.com/originals/1d/ae/9d/1dae9d6820274a7770dbdb67ff1bb135.png' })
  ])
  .then(([ s1, s2, s3, s4, s5, s6, s7, c1, c2, c3, c4, c5, c6 ]) => {
    c1.addStudent(s1);
    c1.addStudent(s2);
    c1.addStudent(s3);
    c2.addStudent(s4);
    c3.addStudent(s5);
    c4.addStudent(s6);
    c5.addStudent(s7);
  })
};

const sync = () => {
  return conn.sync({ force: true });
};

module.exports = {
  seed,
  sync,
  models: {
    Student,
    Campus
  }
}
