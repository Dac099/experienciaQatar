const { Partido } = require('../models/partido-model.js');

async function ShowPartido(req, res){
  try {
    const p = await Partido.create({
      fecha: "2022/11/21",
      puntos_a: 0,
      puntos_b: 0,
      goles_a: 0,
      goles_b:0
    });

    res.json(p);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { ShowPartido };