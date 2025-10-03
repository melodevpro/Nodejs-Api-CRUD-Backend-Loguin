const express = require('express');
const app = express();
const config = require('./config');
const clientes = require('./modulos/clientes/rutas');
const morgan = require('morgan');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// configuracion del servidor
app.set('port', config.app.port);

// rutas
app.use('/api/clientes', clientes);

module.exports = app;