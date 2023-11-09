const patrRoute = require("express").Router();
const patrController = require("../controllers/patrController");

patrRoute.get("/", patrController.getpatr);
patrRoute.post("/create", patrController.create);
patrRoute.put("/update/:id", patrController.update);
patrRoute.delete("/delete/:id", patrController.delete);
patrRoute.get("/details/:id", patrController.getDetails);

module.exports = patrRoute;
