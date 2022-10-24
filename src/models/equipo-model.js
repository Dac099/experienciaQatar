const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');

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
    allowNull: false,
    unique: true
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
  puntos: {
    type: DataTypes.INTEGER, 
    allowNull: false
  },
  etapa: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = { Equipo };