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
    const result = await User.findAll({
      attributes: ["nickname", "correo", "rol"],
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
      goles_a,
      goles_b,
      equipo_a,
      equipo_b,
      etapa,
      correo_user
    } = req.body;

    let ganador = '';

    if(parseInt(goles_a) > parseInt(goles_b)){
      ganador = equipo_a;
    }

    if(parseInt(goles_a) < parseInt(goles_b)){
      ganador = equipo_b;
    }

    const newApuesta = await Apuesta.create({
      fecha: fecha,
      equipo_a: equipo_a,
      equipo_b: equipo_b,
      goles_a: goles_a,
      goles_b: goles_b,
      etapa: etapa,
      ganador: ganador,
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

async function updateApuesta(req, res){
  try {
    const {
      fecha, etapa, goles_a, goles_b, equipo_a, equipo_b, ganador, correo_user
    } = req.body;

    const apuesta = await Apuesta.findOne({
      where: {
        etapa: etapa,
        equipo_a: equipo_a,
        equipo_b: equipo_b,
        fecha: fecha,
        correo_user: correo_user
      }
    });

    console.log(apuesta)


    apuesta.goles_a = goles_a
    apuesta.goles_b = goles_b
    apuesta.ganador = ganador

    
    apuesta.save();

    res.json(apuesta)
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
  createApuesta,
  updateApuesta
};