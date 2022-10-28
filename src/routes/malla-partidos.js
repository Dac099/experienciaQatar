const router = require('express').Router();

const partidosController = require('../controllers/partidos-controller.js');

router.get('/malla-partidos', partidosController.mallaPartidos);
router.get('/getPartidos', partidosController.getPartidos);


module.exports = router;