require('dotenv').config();

const { CreateTeams } = require('./controllers/startup-app.js');
const { sequelize } = require('./database/db-connection.js');

const app = require('./app.js');
const PORT = process.env.PORT;


(async function StartApp(){
  try {
    await sequelize.sync( { force: true } );
    await CreateTeams();
  } catch (error) {
    console.log(error);
  }
})();

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));