const { adminPage, getTeams, createTeam, getMatchByStage } = require('../controllers/admin-controller.js');
const router = require('express').Router();

router.get('/admin', adminPage);
router.get('/admin/equipos', getTeams);
router.post('/admin/new-match', createTeam);
router.get('/admin/partidos/:etapa', getMatchByStage)

module.exports = router;