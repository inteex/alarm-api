import express from "express";

import routes from "./routes";
import { Express } from "express-serve-static-core";
import cors from "cors";
class App {
  public server: Express;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server
      .use(express.json())
      .use(express.urlencoded({ extended: true }))
      .use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
