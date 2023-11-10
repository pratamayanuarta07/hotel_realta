const usacRoute = require("express").Router();
const UsacController = require("../controllers/usacController");

usacRoute.get("/", UsacController.getusac);
usacRoute.post("/create", UsacController.create);
usacRoute.put("/update/:id", UsacController.update);
usacRoute.delete("/delete/:id", UsacController.delete);
usacRoute.get("/details/:id", UsacController.getDetails);

module.exports = usacRoute;
