const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');
const { Etapa } = require('./etapa-model.js');
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
  }
});

Partido.hasOne(Etapa, {
  foreignKey: {
    name: "etapa_partido",
    type: DataTypes.INTEGER
  }
});
Partido.hasOne(Equipo, {
  foreignKey: {
    name: "equipo_a",
    type: DataTypes.INTEGER
  }
});

Partido.hasOne(Equipo, {
  foreignKey: {
    name: "equipo_b",
    type: DataTypes.INTEGER
  }
})
Etapa.belongsTo(Partido);
Equipo.belongsTo(Partido);

Partido.sync();

module.exports = { Partido };