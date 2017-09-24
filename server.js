'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.use(require('body-parser').urlencoded({ extended: false }));
// app.use(require('body-parser').json());

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/api', require('./api'));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${ port }.`);
});
