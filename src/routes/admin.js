const { adminPage, getTeams } = require('../controllers/admin-controller.js');
const router = require('express').Router();

router.get('/admin', adminPage);
router.get('/admin/equipos', getTeams);

module.exports = router;