'use strict';

const app = require('express').Router();
const db = require('../db');
const { Student, Campus } = db.models;

app.get('/campuses', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.send(campuses))
    .catch(next)
});

module.exports = app;
