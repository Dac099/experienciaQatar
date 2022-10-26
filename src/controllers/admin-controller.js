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

async function getMatchById(req, res){
  try {
    const { id } = req.params;

    const match = await Partido.findByPk(id);

    res.json(match);
  } catch (error) {
    console.log(error);
  }
}

async function updateMatch(req, res){
  try {
    const {
      equipo_a,
      equipo_b,
      goles_a,
      goles_b,
      puntos_a,
      puntos_b,
      etapa, 
      fecha
    } = req.body;

    const { id } = req.params;

    const match = await Partido.findByPk(id);

    match.goles_a = parseInt(goles_a);
    match.goles_b = parseInt(goles_b);
    match.equipo_a = equipo_a;
    match.equipo_b = equipo_b;
    match.puntos_a = parseInt(puntos_a);
    match.puntos_b = parseInt(puntos_b);
    match.etapa = etapa;
    match.fecha = fecha;

    const team_a = await Equipo.findAll({
      where: {
        nombre: equipo_a
      }
    });

    const team_b = await Equipo.findAll({
      where: {
        nombre: equipo_b
      }
    });

    team_a[0].puntos += parseInt(puntos_a);
    team_a[0].goles_totales += parseInt(goles_a);
    team_a[0].goles_contra += parseInt(goles_b);
    team_a[0].partidos_jugados += 1;
    
    team_b[0].puntos += parseInt(puntos_b);
    team_b[0].goles_totales += parseInt(goles_b);
    team_b[0].goles_contra += parseInt(goles_a);
    team_b[0].partidos_jugados += 1;

    (puntos_a > puntos_b) ? team_a[0].partidos_ganados += 1 : team_b[0].partidos_ganados += 1;

    await team_a[0].save();
    await team_b[0].save();
    await match.save();

    res.redirect('/admin');
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  adminPage,
  getTeams,
  createTeam,
  getMatchByStage,
  getMatchById,
  updateMatch
}