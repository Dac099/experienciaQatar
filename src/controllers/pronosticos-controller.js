const { User } = require('../models/users-model.js');
const { Partido } = require('../models/partido-model.js');
const { Apuesta } = require('../models/apuesta-model.js');
const { sequelize } = require('../database/db-connection.js');
const { QueryTypes } = require('sequelize');


async function pronosticosPage(req, res){
  try {
    const user = req.user;
    let isAdmin = false;
    if(user.rol === 'Admin'){
      isAdmin = true;
    };

    res.render('pronosticos', {
      logged: true,
      banner: '/media/banner.png',
      logo: '/media/logo-economicas.svg',
      home: '/',
      correoUser: user.email,
      admin: isAdmin,
      username: user.nickname
    });
  } catch (error) {
    console.log(error);
  }
}

async function getPartidos(req, res){
  try {
    const { etapa } = req.params;
      let matches;
    
      if(etapa == "grupos"){
        matches = await sequelize.query(`select * from partidos where etapa='Grupos' order by fecha`, { type: QueryTypes.SELECT });
      }
      if(etapa == "octavos"){
        matches = await sequelize.query(`select * from partidos where etapa='Octavos' order by fecha`, { type: QueryTypes.SELECT });
      }
      if(etapa == "cuartos"){
        matches = await sequelize.query(`select * from partidos where etapa='Cuartos' order by fecha`, { type: QueryTypes.SELECT });
      }
      if(etapa == "semi"){
        matches = await sequelize.query(`select * from partidos where etapa='Semifinal' order by fecha`, { type: QueryTypes.SELECT });
      }
      if(etapa == "final"){
        matches = await sequelize.query(`select * from partidos where etapa='Final' order by fecha`, { type: QueryTypes.SELECT });
      }

      res.json(matches);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  pronosticosPage,
  getPartidos
};