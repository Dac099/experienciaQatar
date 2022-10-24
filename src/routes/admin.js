const { adminPage, getTeams, createTeam } = require('../controllers/admin-controller.js');
const router = require('express').Router();

router.get('/admin', adminPage);
router.get('/admin/equipos', getTeams);
router.post('/admin/new-match', createTeam);

module.exports = router;