const usacRoute = require("express").Router();
const usacController = require("../controllers/usacController");

usacRoute.get("/", usacController.getusac);
usacRoute.post("/create", usacController.create);
usacRoute.put("/update/:id", usacController.update);
usacRoute.delete("/delete/:id", usacController.delete);
usacRoute.get("/details/:id", usacController.getDetails);

module.exports = usacRoute;
