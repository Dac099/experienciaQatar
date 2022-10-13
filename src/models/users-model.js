const { Datatypes, Model } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');

class User extends Model {}
User.init({
  id : {},
  nickname: {},
  correo: {},
  password: {},
  puntos_totales: {},
  puntos_de_grupo: {},
  puntos_de_octavos: {},
  puntos_de_cuartos: {},
  puntos_de_semi: {},
  puntos_de_final: {},
  rol: {}
});

module.exports = { User };