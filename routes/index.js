const labsRouter = require("./labsRouter"),
  locationsRouter = require("./locationsRouter"),
  perfilesRouter = require("./perfilesRouter");

function routerApi ( app ) {
  app.use("/labs", labsRouter);
  app.use("/locations", locationsRouter);
  app.use("/perfiles", perfilesRouter)
}

module.exports = routerApi;
