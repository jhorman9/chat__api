const app = require('./app');

require("dotenv").config();

const PORT = process.env.PORT ?? 8000;

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

module.exports = server;

