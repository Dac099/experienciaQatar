const { getUser } = require('./usuarios-controller');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function Auth(req, res){
  try {
    const {password, email} = req.body;

    const user = getUser(email, password);
    const accessToken = generateToken({
      email: user.correo,
      password: user.password
    });

    res.header('authorization', accessToken).json({
      message: "Usuario autenticado",
      token: accessToken
    });
  } catch (error) {
    console.log(error);
    res.redirect('/user404');
  }
}

function generateToken(user){
  return jwt.sign(user, process.env.TOKEN);
}

async function validateToken(req, res, next){
  const accessToken = req.headers['authorization'] || req.query.token
  if(!accessToken) res.send("No puedes acceder a este recurso");

  jwt.verify(accessToken, process.env.TOKEN, (err, user) => {
    if(err){
      res.send("Token expirado o incorrecto");
    }else{
      next();
    }
  });
}

module.exports = {
  Auth,
  validateToken
}