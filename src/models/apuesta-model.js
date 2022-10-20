const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');

class Apuesta extends Model {}
Apuesta.init({
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
  },
  sequelize,
  modelName: 'Apuesta',
  tableName: 'apuestas'
});

Apuesta.sync();

module.exports = { Apuesta };