'use strict';
const app = require('express').Router();

app.get('/', (req, res, next) => res.redirect('/api/campuses'));
app.use('/campuses', require('./campuses'));
app.use('/students', require('./students'));

module.exports = app;
