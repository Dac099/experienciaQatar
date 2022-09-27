const { Router } = require('express');
const { db, auth } = require('../firebase.js');
const { signin, signup, getUser, getAllUsers, deleteUser} = require('./users.router.js');

const router = Router();

router.get('/', async (req, res) => {
  // const querySnapshot = await db.collection('usuarios').get();
  // const users = querySnapshot.docs.map(doc => ({
  //   id: doc.id,
  //   ...doc.data()
  // }));

  // console.log(users);
  // res.send('Hola');
  console.log('Landing page');
});

router.get('/signin', signin);
router.post('/signup', signup);
router.get('/get-user/:userID', getUser);
router.get('/delete-user/:userID', deleteUser);

router.get('/get-user/:userID', async (req, res) => {
  // const user = await db.collection('usuarios').doc(req.params.userID).get();
  // console.log(user.data());
  const user = await auth.getUser(req.params.userID);
  console.log(user);

  res.send('Usuario obtenido');
})

router.get('/delete-user/:userID', async (req, res) => {
  await db.collection('usuarios').doc(req.params.userID).delete();
  console.log('Usuario eliminado');

  auth.deleteUser()

  res.send('Usuario eliminado');
});

router.post('/update-user/:userID', async (req, res) => {
  await db.collection('usuarios').doc(req.params.userID).update(req.body);

  res.send('Usuario actualizado');
});

module.exports = router;
