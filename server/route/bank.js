const bankRoute = require("express").Router();
const bankController = require("../controller/bankController");

bankRoute.get("/", bankController.getbank);
bankRoute.post("/create", bankController.create);
bankRoute.put("/update/:id", bankController.update);
bankRoute.delete("/delete/:id", bankController.delete);
bankRoute.get("/details/:id", bankController.getDetails);

module.exports = bankRoute;
