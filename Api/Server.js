const express = require("express");
const getRoutes = require("./Routes/Index.js");
const app = express();

class Server {
  constructor() {
    this.server = app;
    getRoutes(app);
  }

  run(port) {
    this.server.listen(port, (err) => {
      if (err) {
        process.exit(1);
      }
      console.log(`Server listening on port: ${port}`);
    });
  }
}

module.exports = Server;
