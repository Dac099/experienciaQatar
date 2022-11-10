const { Partido } = require('../models/partido-model.js');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');

async function getPartidos(req, res){
  try {
    const etapa = req.query.etapa;
    const partidos = await sequelize.query(`select * from partidos where etapa='${etapa}' order by fecha`, { type: QueryTypes.SELECT });
    Partido.findAll({
      where: {
        etapa: etapa
      }
    });

    res.json(partidos);
  } catch (error) {
    console.log(error);
  }
}

async function mallaPartidos(req, res){
  try {
    const user = req.user;
    console.log(user);
    let isAdmin = (user.rol === 'Admin') ? true : false;

    res.render('malla-partidos', {
      logged: true,
      banner: '/media/banner.png',
      logo: '/media/logo-economicas.svg',
      home: '/',
      admin: isAdmin,
      username: user.nickname
    });
  } catch (error) {
    console.log(error);
  }
}


module.exports = { 
  getPartidos,
  mallaPartidos
 };