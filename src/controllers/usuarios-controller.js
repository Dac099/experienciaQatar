const { User } = require('../models/users-model.js');
const { Apuesta } = require('../models/apuesta-model.js');

async function createUser(req, res){
  try {
    const { nickname, email, password } = req.body;

    const newUser = await User.create({
      nickname: nickname,
      correo: email,
      password: password,
      puntos_totales: 0,
      puntos_de_grupo: 0,
      puntos_de_octavos: 0,
      puntos_de_cuartos: 0,
      puntos_de_semi: 0,
      puntos_de_final: 0,
      rol: 'Usuario'
    });

    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
}

async function getUser(email, password){
  try {
    const result = await User.findOne({
      where: {
        correo: email,
        password: password 
      }
    })

    return result;
  } catch (error) {
    return null;
  }
}

async function signin(req, res){
  try {
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
    res.render('signin-signup', {
      title : "Registrate",
      action: "signup",
    });
  } catch (error) {
    console.log(error);
  }

}

async function createApuesta(req, res){
  try {
    const {
      fecha,
      puntos_a,
      puntos_b,
      equipo_a,
      equipo_b,
      ganador,
      etapa,
      correo_user
    } = req.body;

    const newApuesta = await Apuesta.create({
      fecha: fecha,
      equipo_a: equipo_a,
      equipo_b: equipo_b,
      puntos_a: puntos_a,
      puntos_b: puntos_b,
      ganador: ganador,
      etapa: etapa,
      correo_user: correo_user
    });

    res.json(newApuesta);
  } catch (error) {
    console.log(error);
  }
}

function user404(req, res){
  try {
    res.render('user404');
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createUser,
  getUser,
  signin,
  signup,
  user404,
  createApuesta
};