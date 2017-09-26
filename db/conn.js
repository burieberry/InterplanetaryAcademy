'use strict';

const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/campus', { logging: false });

module.exports = conn;
