const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');
const { Etapa } = require('./etapa-model.js');
const { Equipo } = require('./equipo-model.js');

class Partido extends Model{}
Partido.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true
  },

  fecha: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.DATEONLY,
    allowNull: false
  },

  etapa: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  equipo_a: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  equipo_b: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  puntos_a: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  puntos_b: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  goles_a: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  goles_b: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  sequelize,
  modelName: 'Partido',
  tableName: 'partidos'
});

Partido.sync();

module.exports = { Partido };