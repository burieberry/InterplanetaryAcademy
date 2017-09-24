'use strict';

const router = require('express').Router();
const db = require('../db');

router.get('/hello', (req, res, next) => res.send({ hello: 'world'}));

module.exports = router;
