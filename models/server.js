const express = require('express');
const cors = require('cors');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // middlewares
    this.middlewares();

    // routas
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    // directorio public
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.json({
        ok: true,
        msg: 'Hello GET'
      })
    })

    this.app.put('/api', (req, res) => {
      res.json({
        ok: true,
        msg: 'Hello PUT'
      })
    })

    this.app.post('/api', (req, res) => {
      res.json({
        ok: true,
        msg: 'Hello POST'
      })
    })

    this.app.delete('/api', (req, res) => {
      res.json({
        ok: true,
        msg: 'Hello DELETE'
      })
    })

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port);
    })
  }

}

module.exports = Server;