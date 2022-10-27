const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db-connection.js');

const Positions = sequelize.define('posiciones', {
  nombre: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    primaryKey: true
  },

  g1p1_octavos: {
    type: DataTypes.STRING
  },

  g1p2_octavos: {
    type: DataTypes.STRING
  },

  g1p3_octavos: {
    type: DataTypes.STRING
  },

  g1p4_octavos: {
    type: DataTypes.STRING
  },

  g1p5_octavos: {
    type: DataTypes.STRING
  },

  g1p6_octavos: {
    type: DataTypes.STRING
  },

  g1p7_octavos: {
    type: DataTypes.STRING
  },

  g1p8_octavos: {
    type: DataTypes.STRING
  },

  g1p1_cuartos: {
    type: DataTypes.STRING
  },

  g1p2_cuartos: {
    type: DataTypes.STRING
  },

  g1p3_cuartos: {
    type: DataTypes.STRING
  },

  g1p4_cuartos: {
    type: DataTypes.STRING
  },

  g1p1_semifinal: {
    type: DataTypes.STRING
  },

  g1p2_semifinal: {
    type: DataTypes.STRING
  },

  g1p1_final: {
    type: DataTypes.STRING
  },

  g1p2_final: {
    type: DataTypes.STRING
  },

  g2p1_octavos: {
    type: DataTypes.STRING
  },

  g2p2_octavos: {
    type: DataTypes.STRING
  },

  g2p3_octavos: {
    type: DataTypes.STRING
  },

  g2p4_octavos: {
    type: DataTypes.STRING
  },

  g2p5_octavos: {
    type: DataTypes.STRING
  },

  g2p6_octavos: {
    type: DataTypes.STRING
  },

  g2p7_octavos: {
    type: DataTypes.STRING
  },
  
  g2p8_octavos: {
    type: DataTypes.STRING
  },

  g2p1_cuartos: {
    type: DataTypes.STRING
  },

  g2p2_cuartos: {
    type: DataTypes.STRING
  },

  g2p3_cuartos: {
    type: DataTypes.STRING
  },

  g2p4_cuartos: {
    type: DataTypes.STRING
  },

  g2p1_semifinal: {
    type: DataTypes.STRING
  },

  g2p2_semifinal: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
});

module.exports = { Positions };