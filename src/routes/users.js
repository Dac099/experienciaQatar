const router = require('express').Router();
const { signin, signup, createUser, getUser, user404, createApuesta, updateApuesta, getApuestas } = require('../controllers/usuarios-controller.js');

router.get('/signup', signup);
router.get('/signin', signin);
router.post('/signup', createUser);
router.get('/getuser', getUser);
router.get('/user404', user404);
router.post('/user/save-apuesta', createApuesta);
router.post('/updateApuesta', updateApuesta);
router.get('/get-apuestas/:correo', getApuestas);

module.exports = router;