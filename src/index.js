const app = require('./app.js');
const { port } = require('./config.js');

const PORT = port;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));