const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');
const { Etapa } = require('./etapa-model.js');

const Equipo = sequelize.define('equipos', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  partidos_jugados: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  partidos_ganados: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  goles_totales: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  goles_contra: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  goles_favor: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  puntos: {
    type: DataTypes.INTEGER, 
    allowNull: false
  },
});

Equipo.hasOne(Etapa);
Etapa.belongsTo(Equipo);

Equipo.sync();

module.exports = { Equipo };