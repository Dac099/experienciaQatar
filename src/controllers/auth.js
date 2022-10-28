const { getUser } = require('./usuarios-controller');
const jwt = require('jsonwebtoken');
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

    res.header('authorization', accessToken).json(accessToken);

  } catch (error) {
    console.log(error);
    res.redirect('/user404');
  }
}

function generateToken(user){
  return jwt.sign(user, process.env.TOKEN);
}

async function validateToken(req, res, next){
  const accessToken = req.headers.authorization;
  if(!accessToken) res.status(403).send("No puedes acceder a este recurso");

  jwt.verify(accessToken, process.env.TOKEN, (err, user) => {
    if(err){
      res.status(403).send("Token expirado o incorrecto");
    }else{
      req.user = user;
      next();
    }
  });
}

module.exports = {
  Auth,
  validateToken,
}