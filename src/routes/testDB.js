const app = require('express');
const router = app.Router();

const { CrearEtapas, ObtenerEtapas } = require('../controllers/etapa-controller');
const { ShowPartido } = require('../controllers/partidos-controller');

router.get('/etapas', ObtenerEtapas);
router.post('/createEtapas', CrearEtapas);
router.post('/newPartido', ShowPartido);

module.exports = router;