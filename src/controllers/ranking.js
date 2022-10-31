const {  User } = require('../models/users-model.js');

async function getOrderedUsers(req, res){
  try {
    const users = User.findAll({
      order: ['puntos_totales', 'DESC']
    })

    res.json(users);
  } catch (error) {
    console.log(error);
  }
}

async function rankingPage(req, res){
  try {
    const user = req.user;
    const isAdmin = (user.rol === 'Admin') ? true : false;

    res.render('ranking', {
      logged: true, 
      banner: '/media/banner.png',
      logo: '/media/logo-economicas.svg',
      home: '/',
      admin: isAdmin
    })
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getOrderedUsers,
  rankingPage
}