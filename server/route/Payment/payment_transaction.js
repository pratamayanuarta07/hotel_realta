const patrRoute = require("express").Router();
const PatrController = require("../../controller/Payment/patrController");

patrRoute.get("/", PatrController.getpatr);
patrRoute.post("/create", PatrController.create);
patrRoute.put("/update/:id", PatrController.update);
patrRoute.delete("/delete/:id", PatrController.delete);
patrRoute.get("/details/:id", PatrController.getDetails);

module.exports = patrRoute;
