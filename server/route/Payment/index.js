const route = require("express").Router();

// route.get("/", (req, res) => {
//   res.json({
//     message: "Home Page",
//   });
// });

const entityRoute = require("./entity");
const bankRoute = require("./bank");
const pagaRoute = require("./paga");

route.use("/entitys", entityRoute);
route.use("/banks", bankRoute);
route.use("/pagas", pagaRoute);

module.exports = route;
