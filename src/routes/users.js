const router = require('express').Router();
const { signin, signup, createUser, getUser, user404, createApuesta } = require('../controllers/usuarios-controller.js');

router.get('/signup', signup);
router.get('/signin', signin);
router.post('/signup', createUser);
router.get('/getuser', getUser);
router.get('/user404', user404);
router.post('/user/save-apuesta', createApuesta);

module.exports = router;