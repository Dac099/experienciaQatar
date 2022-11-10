const { QueryTypes } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');
const {  User } = require('../models/users-model.js');

async function getOrderedUsers(req, res){
  try {
    const users = await sequelize.query('select * from users ORDER BY puntos_totales DESC', {
      type: QueryTypes.SELECT
    });

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
      admin: isAdmin,
      username: user.nickname
    })
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getOrderedUsers,
  rankingPage
}