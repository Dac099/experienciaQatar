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

async function deleteUser(req, res){
  res.send('Estas eliminando un usuario');
}

async function getUser(req, res){
  res.send('Estas obteniendo un usuario');
}

async function getAllUsers(req, res){
  res.send('Estas obteniendo todos los usuarios');
}

module.exports = {
  signin,
  signup,
  getUser,
  getAllUsers,
  deleteUser
};