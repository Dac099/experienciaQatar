const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');
const { User } = require('./users-model.js');

const Apuesta = sequelize.define('apuestas', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  fecha: {
    type: DataTypes.DATEONLY,
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
  ganador: {
    type: DataTypes.STRING
  },
  etapa: {
    type: DataTypes.STRING
  },
  equipo_a: {
    type: DataTypes.STRING
  },
  equipo_b: {
    type: DataTypes.STRING
  },
  correo_user: {
    type: DataTypes.STRING
  }
},
{
  timestamps: false
});


module.exports = { Apuesta };