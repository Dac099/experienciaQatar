const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');

const User = sequelize.define('users', {
  id : {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true
  },

  nickname: {
    type: DataTypes.STRING,
    allowNull: false
  },

  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

  puntos_totales: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  puntos_de_grupo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  puntos_de_octavos: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  puntos_de_cuartos: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  puntos_de_semi: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  puntos_de_final: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  rol: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

User.sync();

module.exports = { User };