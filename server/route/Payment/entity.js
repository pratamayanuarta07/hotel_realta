const entityRoute = require("express").Router();
const EntityController = require("../../controller/Payment/entityController");

entityRoute.get("/", EntityController.getEntity);
entityRoute.post("/create", EntityController.create);
entityRoute.put("/update/:id", EntityController.update);
entityRoute.delete("/delete/:id", EntityController.delete);
entityRoute.get("/details/:id", EntityController.getDetails);

module.exports = entityRoute;
