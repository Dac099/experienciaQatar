const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');
const { User } = require('./users-model.js');
const { Partido } = require('./partido-model.js');

const Apuesta = sequelize.define('apuestas', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  feha: {
    type: DataTypes.DATEONLY,
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
  partido: {
    type: DataTypes.INTEGER
  },
  usuario: {
    type: DataTypes.INTEGER
  }
});

Apuesta.hasOne(Partido);
Apuesta.hasOne(User);
Partido.belongsTo(Apuesta);
User.belongsTo(Apuesta);

Apuesta.sync();

module.exports = { Apuesta };