'use strict';
const conn = require('./conn');

const Student = conn.define('student', {
  name: {
    type: conn.Sequelize.STRING
  },
  email: {
    type: conn.Sequelize.STRING
  }
});

module.exports = Student;
