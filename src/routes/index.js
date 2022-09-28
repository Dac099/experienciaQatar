const { Router } = require('express');
const { db, auth } = require('../firebase.js');
const { signin, signup, getUser, getAllUsers, deleteUser} = require('./users.router.js');
const { getUrlImages } = require('../storage.js');

const router = Router();

router.get('/', async (req, res) => {
  const urlImgs = await getUrlImages();
  
  res.render('landing', {
    title: 'Experiencia Qatar',
    message: 'Landing page',
    logged: false,
    banner: urlImgs.banner,
    icon: urlImgs.logo
  });
});

router.get('/signin', signin);
router.post('/signup', signup);

module.exports = router;
