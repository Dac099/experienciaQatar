const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');

class Etapa extends Model {}
Etapa.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  fecha_inicio: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.DATEONLY,
    allowNull: false
  },
  fecha_fin: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sequelize,
  modelName: 'Etapa',
  tableName: 'etapas'
});

Etapa.sync();

module.exports = { Etapa };