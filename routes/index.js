const express = require("express")

const labsRouter = require("./labsRouter"),
  locationsRouter = require("./locationsRouter"),
  perfilesRouter = require("./perfilesRouter");

function routerApi ( app ) {

  const router = express.Router();
  app.use("/api/v1", router); //Aquí se crea un path global

  router.use("/labs", labsRouter);
  router.use("/locations", locationsRouter);
  router.use("/perfiles", perfilesRouter)
}

module.exports = routerApi;
