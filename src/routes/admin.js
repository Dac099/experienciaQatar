const { adminPage, getTeams, createTeam, getMatchByStage, getMatchById, updateMatch, savePositions, getPositions } = require('../controllers/admin-controller.js');
const router = require('express').Router();

router.get('/admin', adminPage);
router.get('/admin/equipos', getTeams);
router.post('/admin/new-match', createTeam);
router.get('/admin/partidos/:etapa', getMatchByStage);
router.get('/admin/partidos/get-partido/:id', getMatchById);
router.post('/admin/partidos/update/:id', updateMatch);
router.post('/admin/save-positions', savePositions);
router.get('/admin/get-positions', getPositions);

module.exports = router;