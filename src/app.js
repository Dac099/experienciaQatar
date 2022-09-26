const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.set('views', './views');
app.set('view engine', 'pug');

app.use(require('./routes/index.js'));
module.exports = app;