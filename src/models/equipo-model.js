const { Datatypes } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');

class Equipo extends Model {}
Equipo.init({
  id: {},
  nombre: {},
  partidos_jugados: {},
  partidos_ganados: {},
  goles_totales: {},
  goles_contra: {},
  goles_favor: {},
  puntos: {},
  etapa: {}
});

module.exports = { Equipo };