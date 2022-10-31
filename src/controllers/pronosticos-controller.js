const { User } = require('../models/users-model.js');

async function pronosticosPage(req, res){
  try {
    res.render('pronosticos', {
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
  pronosticosPage
};