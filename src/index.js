require('dotenv').config();

const { CreateTeams, testPartidos, testUsers } = require('./controllers/startup-app.js');
const { sequelize } = require('./database/db-connection.js');

const app = require('./app.js');
const PORT = process.env.PORT;


(async function StartApp(){
  try {
    await sequelize.sync();
    await CreateTeams();
    await testUsers();
  } catch (error) {
    console.log(error);
  }
})();

app.listen(PORT);