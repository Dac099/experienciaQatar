const router = require('express').Router();
const { validateToken } = require('../controllers/auth.js');
const pronosticos = require('../controllers/pronosticos-controller.js');

router.get('/pronosticos', pronosticos.pronosticosPage);

module.exports = router;