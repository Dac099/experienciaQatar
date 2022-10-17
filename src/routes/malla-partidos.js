async function mallaPartidos(req, res){
  try {
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

module.exports = { mallaPartidos };