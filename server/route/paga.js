const pagaRoute = require("express").Router();
const PagaController = require("../controller/pagaController");

pagaRoute.get("/", PagaController.getPaga);
pagaRoute.post("/create", PagaController.create);
pagaRoute.put("/update/:id", PagaController.update);
pagaRoute.delete("/delete/:id", PagaController.delete);
pagaRoute.get("/details/:id", PagaController.getDetails);

module.exports = pagaRoute;
