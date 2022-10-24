const { Equipo } = require('../models/equipo-model.js');
const { Partido } = require('../models/partido-model.js');

async function adminPage(req, res){
  try {
    res.render('admin', {
      logged: true,
      logo: '/media/logo-economicas.svg'
    });
  } catch (error) {
    console.log(error);
  }
}

async function getTeams(req, res){
  try {
    const result = await Equipo.findAll();

    res.json(result);
  } catch (error) {
    console.log(error);
  }
}

async function createTeam(req, res){
  try {
    const {
      fecha,
      equipo_a,
      equipo_b,
      goles_a,
      goles_b,
      puntos_a,
      puntos_b,
      etapa
    } = req.body;

    await Partido.create({
      fecha: fecha,
      equipo_a: equipo_a,
      equipo_b: equipo_b,
      goles_b: goles_b,
      goles_a: goles_a,
      puntos_a: puntos_a,
      puntos_b: puntos_b,
      etapa: etapa
    });

    res.redirect('/admin');
  } catch (error) { 
    console.log(error);
  }
}

async function getMatchByStage(req, res){
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
}

module.exports = {
  adminPage,
  getTeams,
  createTeam,
  getMatchByStage
}