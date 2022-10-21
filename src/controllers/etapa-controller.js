const { Etapa } = require('../models/etapa-model');
const { DataTypes } = require('sequelize');

async function CrearEtapas(req, res){
  try {
    const etapa = await Etapa.create({
      nombre: "Etapa de grupos",
      fecha_inicio: DataTypes.DATEONLY,
      fecha_fin: DataTypes.DATEONLY
    });
  
    res.json(etapa);
  } catch (error) {
    console.log(error);
  }
}

async function ObtenerEtapas(req, res){
  try {
    const result = await Etapa.findAll();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  CrearEtapas, 
  ObtenerEtapas
};