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

const Campus = conn.define('campus', {
  name: {
    type: conn.Sequelize.STRING
  },
  image: {
    type: conn.Sequelize.STRING
  }
});

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
