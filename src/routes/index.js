const { Router } = require('express');
const { mallaPartidos } = require('./malla-partidos.js');
const { createUser, getUser } = require('../controllers/usuarios-controller.js');

const router = Router();
const logged = true;

router.get('/', async (req, res) => {
  
  res.render('landing', {
    title: 'Experiencia Qatar',
    message: 'Landing page',
    logged: logged,
    banner: '/media/banner.png',
    logo: '/media/logo-economicas.svg',
    home: '/'
  });
});


router.get('/malla-partidos', mallaPartidos);
router.post('/createUser', createUser);
router.get('/getuser', getUser);

module.exports = router;
