const { Router } = require('express');
const { signin, signup, getUser, getAllUsers, deleteUser} = require('./users.router.js');
const { administrarEquipos, administrarPartidos } = require('./admin.js');
const { mallaPartidos } = require('./malla-partidos.js');
const path = require('path');

const router = Router();
const logged = true;

router.get('/', async (req, res) => {
  
  res.render('landing', {
    title: 'Experiencia Qatar',
    message: 'Landing page',
    logged: !logged,
    banner: '/media/banner.png',
    icon: '/media/logo-economicas.svg',
    home: '/'
  });
});

router.get('/signin', signin);
router.get('/signup', signup);
router.get('/admin-equipos', administrarEquipos);
router.get('/admin-partidos', administrarPartidos);
router.get('/malla-partidos', mallaPartidos);

module.exports = router;
