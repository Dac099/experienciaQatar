const { 
  adminPage, 
  getTeams, 
  createTeam, 
  getMatchByStage, 
  getMatchById, 
  updateMatch, 
  savePositions, 
  getPositions
} = require('../controllers/admin-controller.js');
const router = require('express').Router();
const { validateToken } = require('../controllers/auth.js');

router.get('/admin', validateToken ,adminPage);
router.get('/admin/equipos', validateToken ,getTeams);
router.post('/admin/new-match', validateToken ,createTeam);
router.get('/admin/partidos/:etapa', validateToken ,getMatchByStage);
router.get('/admin/partidos/get-partido/:id', validateToken ,getMatchById);
router.post('/admin/partidos/update/:id', validateToken ,updateMatch);
router.post('/admin/save-positions', validateToken ,savePositions);
router.get('/admin/get-positions', validateToken ,getPositions);

module.exports = router;