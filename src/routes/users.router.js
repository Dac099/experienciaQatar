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

module.exports = {
  signin,
  signup
};