const { User } = require('../models/users-model.js');
const { Partido } = require('../models/partido-model.js');
const { Apuesta } = require('../models/apuesta-model.js');

async function pronosticosPage(req, res){
  try {
    res.render('pronosticos', {
      logged: true,
      banner: '/media/banner.png',
      logo: '/media/logo-economicas.svg',
      home: '/'
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
        matches = await Partido.findAll({
          where: {
            etapa: "Grupos"
          }
        });
      }
      if(etapa == "octavos"){
        matches = await Partido.findAll({
          where: {
            etapa: "Octavos"
          }
        });
      }
      if(etapa == "cuartos"){
        matches = await Partido.findAll({
          where: {
            etapa: "Cuartos"
          }
        });
      }
      if(etapa == "semi"){
        matches = await Partido.findAll({
          where: {
            etapa: "Semifinal"
          }
        });
      }
      if(etapa == "final"){
        matches = await Partido.findAll({
          where: {
            etapa: "Final"
          }
        });
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