// Funciones para el control de usuarios
const { auth } = require('../firebase.js');
const { getUrlImages } = require('../storage.js');

async function signin(req, res){
  try {
    // const { email, password } = req.body;    
    res.render('signin-signup', {
      title : "Inicia sesion",
      action: "signin",
    });
  } catch (error) {
    console.log(error);
  }
} 

async function signup(req, res){
  try {
    // const { nickname, email, password } = req.body;
    // const user = await auth.createUser({
    //   email: email,
    //   password: password,
    //   displayName: nickname
    // });
    res.render('signin-signup', {
      title : "Registrate",
      action: "signup",
    });
  } catch (error) {
    console.log(error);
  }

}

module.exports = {
  signin,
  signup
};