const { Router } = require('express');
const { Timestamp } = require('firebase-admin/firestore');
const { db, auth } = require('../firebase.js');

const router = Router();

router.get('/', async (req, res) => {
  const querySnapshot = await db.collection('usuarios').get();
  const users = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  console.log(users);
  res.send('Hola');
});

router.post('/signup', async (req, res) => {
  const { nickname, email, password } = req.body;
  const register = Timestamp.now();

  // Guardar usuario en DB
  await db.collection('usuarios').add({
    nickname,
    email,
    password,
    register
  });

  //Crear una cuenta nueva conn Auth
  const user = await auth.createUser({
    email : email,
    displayName: nickname,
    password: password
  });
  console.log(user);

  res.send(`<h1>${nickname} registrado</h1>`);
})

router.get('/get-user/:userID', async (req, res) => {
  const user = await db.collection('usuarios').doc(req.params.userID).get();
  console.log(user.data());

  res.send('Usuario obtenido');
})

router.get('/delete-user/:userID', async (req, res) => {
  await db.collection('usuarios').doc(req.params.userID).delete();
  console.log('Usuario eliminado');

  res.send('Usuario eliminado');
});

router.post('/update-user/:userID', async (req, res) => {
  await db.collection('usuarios').doc(req.params.userID).update(req.body);

  res.send('Usuario actualizado');
});

module.exports = router;
