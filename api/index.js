'use strict';
const app = require('express').Router();
const db = require('../db');
const { Student, Campus } = db.models;

// GET
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
  Student.findAll({ include: [ Campus ] })
    .then(students => res.send(students))
    .catch(next)
});

app.get('/students/:id', (req, res, next) => {
  Student.findById(req.params.id)
    .then(student => res.send(student))
    .catch(next)
});

// CREATE
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

// UPDATE
app.put('/campuses/:id', (req, res, next) => {
  Campus.findById(req.params.id)
    .then(campus => {
      campus.name = req.body.name;
      return campus.save();
    })
    .then(campus => res.send(campus))
    .catch(next)
});

app.put('/students/:id', (req, res, next) => {
  Student.findById(req.params.id)
    .then(student => student.updateStudentInfo(student, req.body))
    .then(student => res.send(student))
    .catch(next)
});

// DELETE
app.delete('/campuses/:id', (req, res, next) => {
  Campus.destroy({ where: { id: req.params.id }})
    .then(() => res.sendStatus(204))
    .catch(next)
});

app.delete('/students/:id', (req, res, next) => {
  Student.destroy({ where: { id: req.params.id }})
    .then(() => res.sendStatus(204))
    .catch(next)
});

module.exports = app;
