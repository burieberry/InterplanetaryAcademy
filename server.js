'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/api', require('./api'));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

const port = process.env.PORT || 3000;
const db = require('./db');

app.listen(port, () => {
  db.sync()
    .then(db.seed)
    .then(console.log('Database synced and seeded.'))
    .then(console.log(`Listening on port ${ port }.`))
});

module.exports = app;
