'use strict';
const app = require('express').Router();
const db = require('../db');
const { Student } = db.models;

app.get('/', (req, res, next) => {
  Student.findAll({ include: [ db.models.Campus ] })
    .then(students => res.send(students))
    .catch(next)
});

app.get('/:id', (req, res, next) => {
  Student.findById(req.params.id)
    .then(student => res.send(student))
    .catch(next)
});

app.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.status(201).send(student))
    .catch(next)
});

app.put('/:id', (req, res, next) => {
  Student.updateStudentInfo(req.params.id, req.body)
    .then(student => res.send(student))
    .catch(next)
});

app.delete('/:id', (req, res, next) => {
  Student.destroy({ where: { id: req.params.id }})
    .then(() => res.sendStatus(204))
    .catch(next)
});

module.exports = app;
