const { Datatypes } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');

class Etapa extends Model {}
Etapa.init({
  id: {},
  fecha_inicio: {},
  fecha_fin: {},
  nombre: {}
});

module.exports = { Etapa };