const { Router } = require('express');
const { validateToken } = require('../controllers/auth.js');
const router = Router();
const logged = true;
let isAdmin = false;

router.get('/', validateToken, async (req, res) => {
  const user = req.user;

  if(user.rol === 'Admin'){
    isAdmin = true
  }
  
  res.render('landing', {
    title: 'Experiencia Qatar',
    message: 'Landing page',
    logged: logged,
    banner: '/media/banner.png',
    logo: '/media/logo-economicas.svg',
    home: '/',
    admin: isAdmin,
    username: user.nickname
  });
});


router.use(require('./malla-partidos.js'));

module.exports = router;
