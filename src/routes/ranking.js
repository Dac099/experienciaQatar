const router = require('express').Router();
const ranking = require('../controllers/ranking.js');
const { validateToken } = require('../controllers/auth.js');

router.get('/ranking', validateToken ,ranking.rankingPage);
router.get('/getUsersRanking', validateToken, ranking.getOrderedUsers);

module.exports = router;