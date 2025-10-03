const express = require('express');
const router = express.Router();

const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

router.get('/', async function (req, res) {
    try {
        const items = await controlador.todos(); // aquí sí esperamos la BD
        respuesta.success(req, res, items, 200);
    } catch (error) {
        respuesta.error(req, res, 'Error obteniendo clientes', 500, error);
    }
});

router.get('/:id', async function (req, res) {
    try {
        const items = await controlador.uno(req.params.id);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        respuesta.error(req, res, 'Error obteniendo clientes', 500, err);
    }
});

module.exports = router;