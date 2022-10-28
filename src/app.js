const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/assets', express.static(path.join(__dirname, '../public')));

app.use(require('./routes/index.js'));
app.use(require('./routes/admin.js'));
app.use(require('./routes/users.js'));
app.use(require('./routes/auth.js'));
module.exports = app;