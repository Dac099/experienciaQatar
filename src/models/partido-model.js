const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');
const { Equipo } = require('./equipo-model.js');

const Partido = sequelize.define('partidos', {
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
  etapa: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

Partido.belongsTo(Equipo, {
  foreignKey: 'equipo_a',
  as: 'team_a',
  targetKey: 'nombre'
});
Partido.belongsTo(Equipo, {
  foreignKey: 'equipo_b',
  as: 'team_b',
  targetKey: 'nombre'
});


module.exports = { Partido };