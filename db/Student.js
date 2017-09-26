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

Student.prototype.updateStudentInfo = (student, data) => {
  if (student.name !== data.name) student.name = data.name;
  if (student.email !== data.email) student.email = data.email;
  if (student.campusId !== data.campusId) student.campusId = data.campusId;
  return student.save();
};

module.exports = Student;
