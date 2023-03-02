const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const countRouter = require("../routes/count");

class Server {
  static _instance = null;

  static getInstance() {
    if (!Server._instance) {
      console.log("[Server] Creating server instance");
      Server._instance = new Server();
    }
    return Server._instance;
  }

  constructor() {
    this._app = express();
    this._port = process.env.PORT || 3333;
    this._apiPaths = {
      count: countRouter,
    };

    this._app.enable('trust proxy');

    this._initMiddlewares();
    this._initRoutes();
  }

  _initMiddlewares() {
    // Configure cors.
    this._app.use(cors());

    // Configure public folder.
    this._app.use(express.static("public"));

    // Configure body-parser.
    this._app.use(bodyParser.urlencoded({ extended: true }));
    this._app.use(bodyParser.json());
  }

  _initRoutes() {
    for (const [path, router] of Object.entries(this._apiPaths)) {
      this._app.use(`/api/${path}`, router);
    }
  }

  listen() {
    this._app.listen(this._port, () => {
      console.log(`[Server] Listening on port ${this._port}`);
    });
  }
}

module.exports = Server;
