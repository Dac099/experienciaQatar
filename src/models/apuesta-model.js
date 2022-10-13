const { Datatypes } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');

class Apuesta extends Model {}
Apuesta.init({
  id: {},
  feha: {},
  puntos_a: {},
  puntos_b: {},
  partido: {},
  usuario: {}
});

module.exports = { Apuesta };