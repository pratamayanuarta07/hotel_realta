const bankRoute = require("express").Router();
const BankController = require("../../controller/Payment/bankController");

bankRoute.get("/", BankController.getBank);
bankRoute.post("/create", BankController.create);
bankRoute.put("/update/:id", BankController.update);
bankRoute.delete("/delete/:id", BankController.delete);
bankRoute.get("/details/:id", BankController.getDetails);

module.exports = bankRoute;
