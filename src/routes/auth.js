const router = require('express').Router();
const { Auth } = require('../controllers/auth.js');

router.post('/auth', Auth);

module.exports = router;