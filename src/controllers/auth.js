const { getUser } = require('./usuarios-controller');
const jwt = require('jsonwebtoken');
const { User } = require('../models/users-model');
require('dotenv').config();

async function Auth(req, res){
  try {
    const {password, email} = req.body;

    const user = await getUser(email, password);


    const accessToken = generateToken({
      email: user[0].correo,
      nickname: user[0].nickname,
      rol: user[0].rol
    });

    const cookieOptions = {
      httpOnly: true
    }

    res.cookie('jwt', accessToken, cookieOptions);
    res.redirect('/malla-partidos');

  } catch (error) {
    console.log(error);
    res.redirect('/user404');
  }
}

function generateToken(user){
  return jwt.sign(user, process.env.TOKEN);
}

async function validateToken(req, res, next){
  if(req.cookies.jwt){
    try {
      jwt.verify(req.cookies.jwt, process.env.TOKEN, (err, user) => {
        if(err){
          res.status(403).send('Usuario no autorizado, inicia sesion');
        }else{
          req.user = user;
          next();
        }
      });
    
    } catch (error) {
      console.log(error);
    }
  }else{
    res.redirect('/signin');
  }
}

module.exports = {
  Auth,
  validateToken,
}