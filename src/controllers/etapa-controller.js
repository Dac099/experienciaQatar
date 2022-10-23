const { Etapa } = require('../models/etapa-model');
const { DataTypes } = require('sequelize');

async function CrearEtapas(req, res){
  try {
    const grupos = await Etapa.create({
      nombre: "Etapa de grupos",
      fecha_inicio: '2022/11/21',
      fecha_fin: '2022/11/02'
    });

    const octavos = await Etapa.create({
      nombre: "Octavos",
      fecha_inicio: "2022/12/03",
      fecha_fin: "2022/12/06"
    })

    const cuartos = await Etapa.create({
      nombre: "Cuartos",
      fecha_inicio: "2022/12/9",
      fecha_fin: "2022/12/10"
    })

    const semi = await Etapa.create({
      nombre: "Semi Final",
      fecha_inicio: "2022/12/13",
      fecha_fin: "2022/12/14"
    })

    const final = await Etapa.create({
      nombre: "Final",
      fecha_inicio: "2022/12/18",
      fecha_fin: "2022/12/18"
    })

    res.json({
      message: "Etapas creadas"
    })
  
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