const { getUrlImages } = require('../storage.js');


async function administrarEquipos(req, res){
  try {
    const urlImgs = await getUrlImages();

    res.render('equipos', {
      logo: urlImgs.logo,
      home: '/',
      path: '/equipos'
    });
  } catch (error) {
    console.log(error);
  }
}

async function administrarPartidos(req, res){
  try {
    const urlImgs = await getUrlImages();

    res.render('partidos', {
      logo: urlImgs.logo,
      home:'/',
      path: '/partidos'

    })
  } catch (error) { 
    console.log(error);
  }
}

module.exports = {
  administrarEquipos,
  administrarPartidos
};