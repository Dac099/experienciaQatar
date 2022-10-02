const { Router } = require('express');
const { db, auth } = require('../firebase.js');
const { signin, signup, getUser, getAllUsers, deleteUser} = require('./users.router.js');
const { getUrlImages } = require('../storage.js');

const router = Router();
const logged = true;

router.get('/', async (req, res) => {
  const urlImgs = await getUrlImages();
  
  res.render('landing', {
    title: 'Experiencia Qatar',
    message: 'Landing page',
    logged: !logged,
    banner: urlImgs.banner,
    icon: urlImgs.logo,
    home: 'http://localhost:3001'
  });
});

router.get('/signin', signin);
router.post('/signup', signup);

module.exports = router;
