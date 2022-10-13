require('dotenv').config();
const { Sequelize } = require('sequelize');
const {DB_NAME, DB_USER, DB_PASSWORD} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});

async function testConnection(){
  try {
    await sequelize.authenticate();
    console.log('Connection established');
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  testConnection,
  sequelize
}