
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');


var IndexRouter = require('./routes/Index');
var LoginRouter = require('./routes/Login');
var historialinyeccionRouter = require('./routes/historialinyeccion');
var historialmoldesRouter = require('./routes/historialmoldes');
var historialgeneralRouter = require('./routes/historialgeneral');
var registrosinyeccionRouter= require('./routes/registrosinyeccion');
var registrosmoldesRouter= require('./routes/registrosmoldes');
var registrosgeneralRouter= require('./routes/registrosgeneral');
var CrearUserRouter = require('./routes/CrearUser');
var UsuariosRouter = require('./routes/Usuarios');


var app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'partials')));
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
  }));

  app.use(function(req, res, next) {
    if (!req.usuario)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
  });



app.use('/', IndexRouter);
app.use('/Login', LoginRouter);
app.use('/historialinyeccion', historialinyeccionRouter);
app.use('/historialmoldes', historialmoldesRouter);
app.use('/historialgeneral', historialgeneralRouter);
app.use('/registrosinyeccion', registrosinyeccionRouter);
app.use('/registrosmoldes', registrosmoldesRouter);
app.use('/registrosgeneral', registrosgeneralRouter);
app.use('/CrearUser', CrearUserRouter);
app.use('/Usuarios', UsuariosRouter);


module.exports = app;
