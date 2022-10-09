const { getUrlImages } = require('../storage.js');


async function administrarEtapas(req, res){
  try {
    const urlImgs = await getUrlImages();

    res.render('admin', {
      icon: urlImgs.logo,
      logged: true
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  administrarEtapas
};