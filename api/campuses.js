'use strict';
const app = require('express').Router();
const db = require('../db');
const { Campus } = db.models;

app.get('/', (req, res, next) => {
  Campus.findAll({ include: [ db.models.Student ] })
    .then(campuses => res.send(campuses))
    .catch(next)
});

app.get('/:id', (req, res, next) => {
  Campus.findById(req.params.id, { include: [ db.models.Student ] })
    .then(campus => res.send(campus))
    .catch(next)
});

app.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.status(201).send(campus))
    .catch(next)
});

app.put('/:id', (req, res, next) => {
  Campus.updateCampusInfo(req.params.id, req.body)
    .then(campus => res.send(campus))
    .catch(next)
});

app.delete('/:id', (req, res, next) => {
  Campus.destroy({ where: { id: req.params.id }})
    .then(() => res.sendStatus(204))
    .catch(next)
});

module.exports = app;
