require('dotenv').config();
const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');
const { getStorage } = require('firebase-admin/storage');

initializeApp({
  credential: applicationDefault(),
  storageBucket: 'polla-mundialista-75eb4.appspot.com'
})

const db = getFirestore();
const auth = getAuth();
const bucket = getStorage().bucket();

module.exports = {
  db,
  auth,
  bucket
}
