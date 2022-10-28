const { Router } = require('express');
const { validateToken } = require('../controllers/auth.js');
const router = Router();
const logged = true;

router.get('/', async (req, res) => {
  
  res.render('landing', {
    title: 'Experiencia Qatar',
    message: 'Landing page',
    logged: !logged,
    banner: '/media/banner.png',
    logo: '/media/logo-economicas.svg',
    home: '/'
  });
});


router.use(require('./malla-partidos.js'));

module.exports = router;
