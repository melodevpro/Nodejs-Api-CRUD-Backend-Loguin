const express = require('express');
const app = express();
const config = require('./config');
const clientes = require('./modulos/clientes/rutas');

// configuracion del servidor
app.set('port', config.app.port);

// rutas
app.use('/api/clientes', clientes);

module.exports = app;