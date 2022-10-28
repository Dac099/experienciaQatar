const { Apuesta } = require('../models/apuesta-model.js');
const { Equipo } = require('../models/equipo-model.js');
const { Partido } = require('../models/partido-model.js');
const { Positions } = require('../models/positions-model.js');
const { User } = require('../models/users-model.js');

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

    //Actualizar informacion de usuario dependiendo de su apuesta
      //Buscar la apuesta que tiene el partido relacionado
      const apuesta = await Apuesta.findOne({
        where: {
          equipo_a : equipo_a,
          equipo_b: equipo_b,
          fecha: fecha,
          etapa: etapa
        }
      });

      //Buscar al usuario correspondiente de la apuesta
      const userApuesta = await User.findOne({
        where: {
          correo: apuesta.correo_user
        }
      });

      //Definir el ganador de apuestas
      const ganadorApuesta = (apuesta.puntos_a > apuesta.puntos_b) ? apuesta.equipo_a : apuesta.equipo_b;

      //Definir el ganador del partido
      const ganadorPartido = (puntos_a > puntos_b) ? equipo_a : equipo_b;


      console.log(ganadorPartido);
      //Si ganadorApuesta == ganadorPartido dar punto
      if(ganadorApuesta == ganadorPartido){
        userApuesta.puntos_totales += 1;
        //Definir etapas para dar puntos
        if(etapa == 'Grupos'){
          userApuesta.puntos_de_grupo += 1;
        }
        if(etapa == 'Octavos'){
          userApuesta.puntos_de_octavos += 1;
        }
        if(etapa == 'Cuartos'){
          userApuesta.puntos_de_cuartos += 1;
        }
        if(etapa == 'Semifinal'){
          userApuesta.puntos_de_semi += 1;
        }
        if(etapa == 'final'){
          userApuesta.puntos_de_final += 1;
        }
      }
      //Si acerta con el marcador, tambien dar un punto
      if(apuesta.puntos_a == puntos_a && apuesta.puntos_b == puntos_b){
        userApuesta.puntos_totales += 1;
        //Definir etapas para dar puntos
        if(etapa == 'Grupos'){
          userApuesta.puntos_de_grupo += 1;
        }
        if(etapa == 'Octavos'){
          userApuesta.puntos_de_octavos += 1;
        }
        if(etapa == 'Cuartos'){
          userApuesta.puntos_de_cuartos += 1;
        }
        if(etapa == 'Semifinal'){
          userApuesta.puntos_de_semi += 1;
        }
        if(etapa == 'final'){
          userApuesta.puntos_de_final += 1;
        }
      }

      userApuesta.save();
    //Actualizar partido
    match.goles_a = parseInt(goles_a);
    match.goles_b = parseInt(goles_b);
    match.equipo_a = equipo_a;
    match.equipo_b = equipo_b;
    match.puntos_a = parseInt(puntos_a);
    match.puntos_b = parseInt(puntos_b);
    match.etapa = etapa;
    match.fecha = fecha;

    //Actualizar equipos relacionados en el partido
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

async function savePositions(req, res){
  try {
    const {
      g1p1_octavos, g1p2_octavos, g1p3_octavos, g1p4_octavos,
      g1p5_octavos, g1p6_octavos, g1p7_octavos, g1p8_octavos,
      g1p1_cuartos, g1p2_cuartos, g1p3_cuartos, g1p4_cuartos,
      g1p1_semifinal, g1p2_semifinal, g1p1_final, g1p2_final,
      g2p1_octavos, g2p2_octavos, g2p3_octavos, g2p4_octavos,
      g2p5_octavos, g2p6_octavos, g2p7_octavos, g2p8_octavos,
      g2p1_cuartos, g2p2_cuartos, g2p3_cuartos, g2p4_cuartos,
      g2p1_semifinal, g2p2_semifinal
    } = req.body;

    const [table, created] = await Positions.findOrCreate({
      where: { nombre: "valores"},
      defaults: {
        nombre: "valores",
        g1p1_octavos: g1p1_octavos,
        g1p2_octavos: g1p2_octavos,    
        g1p3_octavos: g1p3_octavos,
        g1p4_octavos: g1p4_octavos,    
        g1p5_octavos: g1p5_octavos,    
        g1p6_octavos: g1p6_octavos,    
        g1p7_octavos: g1p7_octavos,    
        g1p8_octavos: g1p8_octavos,    
        g1p1_cuartos: g1p1_cuartos,    
        g1p2_cuartos: g1p2_cuartos,    
        g1p3_cuartos: g1p3_cuartos,    
        g1p4_cuartos: g1p4_cuartos,    
        g1p1_semifinal: g1p1_semifinal,    
        g1p2_semifinal: g1p2_semifinal,    
        g1p1_final: g1p1_final,    
        g1p2_final: g1p2_final,    
        g2p1_octavos: g2p1_octavos,    
        g2p2_octavos: g2p2_octavos,    
        g2p3_octavos: g2p3_octavos,    
        g2p4_octavos: g2p4_octavos,    
        g2p5_octavos: g2p5_octavos,    
        g2p6_octavos: g2p6_octavos,    
        g2p7_octavos: g2p7_octavos,      
        g2p8_octavos: g2p8_octavos,    
        g2p1_cuartos: g2p1_cuartos,    
        g2p2_cuartos: g2p2_cuartos,    
        g2p3_cuartos: g2p3_cuartos,    
        g2p4_cuartos: g2p4_cuartos,    
        g2p1_semifinal: g2p1_semifinal,    
        g2p2_semifinal: g2p2_semifinal
      }
    });

    if(!created){
      table.g1p1_octavos = g1p1_octavos;
      table.g1p2_octavos = g1p2_octavos;    
      table.g1p3_octavos = g1p3_octavos;
      table.g1p4_octavos = g1p4_octavos;    
      table.g1p5_octavos = g1p5_octavos;    
      table.g1p6_octavos = g1p6_octavos;    
      table.g1p7_octavos = g1p7_octavos;    
      table.g1p8_octavos = g1p8_octavos;    
      table.g1p1_cuartos = g1p1_cuartos;    
      table.g1p2_cuartos = g1p2_cuartos;    
      table.g1p3_cuartos = g1p3_cuartos;    
      table.g1p4_cuartos = g1p4_cuartos;    
      table.g1p1_semifinal = g1p1_semifinal;    
      table.g1p2_semifinal = g1p2_semifinal;    
      table.g1p1_final = g1p1_final;    
      table.g1p2_final = g1p2_final;    
      table.g2p1_octavos = g2p1_octavos;    
      table.g2p2_octavos = g2p2_octavos;    
      table.g2p3_octavos = g2p3_octavos;    
      table.g2p4_octavos = g2p4_octavos;    
      table.g2p5_octavos = g2p5_octavos;    
      table.g2p6_octavos = g2p6_octavos;    
      table.g2p7_octavos = g2p7_octavos;      
      table.g2p8_octavos = g2p8_octavos;    
      table.g2p1_cuartos = g2p1_cuartos;    
      table.g2p2_cuartos = g2p2_cuartos;    
      table.g2p3_cuartos = g2p3_cuartos;    
      table.g2p4_cuartos = g2p4_cuartos;    
      table.g2p1_semifinal = g2p1_semifinal;    
      table.g2p2_semifinal = g2p2_semifinal;

      table.save();
    }

    res.redirect('/admin');
  } catch (error) {
    console.log(error);
  }
}

async function getPositions(req, res){
  try {
    const values = await Positions.findByPk('valores');

    res.json(values);
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
  updateMatch,
  savePositions,
  getPositions
}