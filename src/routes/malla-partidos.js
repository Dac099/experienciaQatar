const router = require('express').Router();
const { validateToken } = require('../controllers/auth.js');

const partidosController = require('../controllers/partidos-controller.js');

router.get('/malla-partidos', validateToken ,partidosController.mallaPartidos);
router.get('/getPartidos', partidosController.getPartidos);


module.exports = router;