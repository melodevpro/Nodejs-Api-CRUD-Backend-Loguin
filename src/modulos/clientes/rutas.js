const express = require('express');
const router = express.Router();

const respuesta = require('../../red/respuestas');


router.get('/', function (req, res) {
    respuesta.success(req, res, 'Todo ok desde clientes', 200);
});

module.exports = router;