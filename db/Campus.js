'use strict';
const conn = require('./conn');

const Campus = conn.define('campus', {
  name: {
    type: conn.Sequelize.STRING
  },
  image: {
    type: conn.Sequelize.STRING
  }
});

module.exports = Campus;
