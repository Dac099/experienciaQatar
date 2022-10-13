const { Datatypes } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');
const { Etapa } = require('./etapa-model.js');

class Partido extends Model{}
Partido.init({
  id: {},
  fecha: {},
  etapa: {},
  equipo_a: {},
  equipo_b: {},
  puntos_a: {},
  puntos_b: {},
  goles_a: {},
  goles_b: {}
});

module.exports = { Partido };