'use strict';
const conn = require('./conn');
const Student = require('./Student'),
      Campus = require('./Campus');

// Associations
Campus.hasMany(Student);
Student.belongsTo(Campus);

const sync = () => {
  return conn.sync({ force: true });
};

module.exports = {
  sync,
  models: {
    Student,
    Campus
  }
}
