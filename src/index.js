require('dotenv').config();
const { testConnection } = require('./database/db-connection.js');
const app = require('./app.js');
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));