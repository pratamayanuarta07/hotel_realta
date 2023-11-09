const pagaRoute = require("express").Router();
const pagaController = require("../controller/PagaController");

pagaRoute.get("/", pagaController.getpaga);
pagaRoute.post("/create", pagaController.create);
pagaRoute.put("/update/:id", pagaController.update);
pagaRoute.delete("/delete/:id", pagaController.delete);
pagaRoute.get("/details/:id", pagaController.getDetails);

module.exports = pagaRoute;
