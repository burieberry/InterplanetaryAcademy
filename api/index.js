'use strict';
const app = require('express').Router();
const db = require('../db');
const { Student, Campus } = db.models;

app.get('/campuses', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.send(campuses))
    .catch(next)
});

app.get('/campuses/:id', (req, res, next) => {
  Campus.findById(req.params.id)
    .then(campus => res.send(campus))
    .catch(next)
});

app.get('/students', (req, res, next) => {
  Student.findAll()
    .then(students => res.send(students))
    .catch(next)
});

app.get('/students/:id', (req, res, next) => {
  Student.findById(req.params.id)
    .then(student => res.send(student))
    .catch(next)
});

app.post('/campuses', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.status(201).send(campus))
    .catch(next)
});

app.post('/students', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.status(201).send(student))
    .catch(next)
});

module.exports = app;
