const express = require("express");
const cors = require("cors");
const path = require("path");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.paths = {
      randomImage: "/random",
      allBreeds: "/all",
      filteredImage: "/filtered"
    };

    this.middlewares();
    this.routes();

  }

  middlewares() {
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.paths.randomImage, require("../controller/imageRandomController"));
    this.app.use(this.paths.allBreeds, require("../controller/breedController"));
    this.app.use(this.paths.filteredImage, require("../controller/imageFilteredController"));
  }


  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port: ", this.port);
    });
  }
  
}

module.exports = Server;