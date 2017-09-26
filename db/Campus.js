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

Campus.updateCampusInfo = function(id, data) {
  return Campus.findById(id)
    .then(campus => {
      campus.name = data.name;
      return campus.save();
    })
};

module.exports = Campus;
