const { User } = require('../models/users-model.js');

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

    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
}

async function getUser(req, res){
  try {
    const { email, password } = req.body;

    const result = await User.findAll({
      where: {
        correo: email,
        password: password 
      }
    })
  
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createUser,
  getUser
};