const express = require('express');
const cors = require('cors');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersRoutePath = '/api/users'

    // middlewares
    this.middlewares();

    // routas
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
    // directorio public
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usersRoutePath, require('../routes/user.routes'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port);
    })
  }

}

module.exports = Server;