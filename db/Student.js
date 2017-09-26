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

Student.updateStudentInfo = (id, data) => {
  return Student.findById(id)
    .then(student => {
      student.attributes.map(attr => {
        student[attr] = data[attr];
      })
      return student.save();
    })
};

module.exports = Student;
