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
      puntos_b
    } = req.body;

    const match = Partido.create({
      fecha: fecha,
      equipo_a: equipo_a,
      equipo_b: equipo_b,
      goles_b: goles_b,
      goles_a: goles_a,
      puntos_a: puntos_a,
      puntos_b: puntos_b
    });

  } catch (error) { 
    console.log(error);
  }
}

module.exports = {
  adminPage,
  getTeams
}