const { Partido } = require('../models/partido-model.js');

async function getPartidos(req, res){
  try {
    const etapa = req.query.etapa;
    console.log(etapa);
    const partidos = await Partido.findAll({
      where: {
        etapa: etapa
      }
    });

    res.json(partidos);
  } catch (error) {
    console.log(error);
  }
}

async function mallaPartidos(req, res){
  try {
    const user = req.user;
    console.log(user);
    res.render('malla-partidos', {
      logged: true,
      banner: '/media/banner.png',
      logo: '/media/logo-economicas.svg',
      home: '/'
    });
  } catch (error) {
    console.log(error);
  }
}


module.exports = { 
  getPartidos,
  mallaPartidos
 };