const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send ('Rutas de clientes')
});

module.exports = router;