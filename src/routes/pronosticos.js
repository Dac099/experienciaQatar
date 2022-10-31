const router = require('express').Router();
const { validateToken } = require('../controllers/auth.js');
const pronosticos = require('../controllers/pronosticos-controller.js');

router.get('/pronosticos', validateToken ,pronosticos.pronosticosPage);
router.get('/get-partidos/:etapa', validateToken ,pronosticos.getPartidos);

module.exports = router;