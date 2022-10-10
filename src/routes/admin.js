async function administrarEquipos(req, res){
  try {

    res.render('equipos', {
      logo: '/media/logo-economicas.svg',
      home: '/',
      path: '/equipos'
    });
  } catch (error) {
    console.log(error);
  }
}

async function administrarPartidos(req, res){
  try {

    res.render('partidos', {
      logo: '/media/logo-economicas.svg',
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