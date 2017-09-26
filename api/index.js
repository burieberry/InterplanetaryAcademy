'use strict';
const app = require('express').Router();

app.use('/campuses', require('./campuses'));
app.use('/students', require('./students'));

module.exports = app;
