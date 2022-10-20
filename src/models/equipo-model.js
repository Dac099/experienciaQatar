const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');

class Equipo extends Model {}
Equipo.init({
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
  etapa: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sequelize,
  modelName: 'Equipo',
  tableName: 'Equipos'
});

Equipo.sync();

module.exports = { Equipo };