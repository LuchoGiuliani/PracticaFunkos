const express = require('express');
const path = require('path'); 
const app = express();
//const method = require('method-override');
//const session = require('express-session');

const public = require('./modules/public.js');
const {port,callback} = require('./modules/listen');

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


app.listen(port, callback('Abriendo servidor en 2022'))


app.use(public);

app.use(require('./routes/main.routes'))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(method('m'));
// app.use(require('method-override')('m'));



