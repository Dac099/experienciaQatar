const app = require('express');
const router = app.Router();

const { CrearEtapas, ObtenerEtapas } = require('../controllers/etapa-controller');

router.get('/etapas', ObtenerEtapas);
router.post('/createEtapas', CrearEtapas);

module.exports = router;