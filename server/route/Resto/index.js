const resto_route = require("express").Router();

resto_route.get("/", (req, res) => {
  res.json({
    message: "Test",
  });
});

const rmphotos = require("./rmphotosRoute");
const resto_menus = require("./resto_menusRoute");

resto_route.use("/restophoto", rmphotos);
resto_route.use("/resto", resto_menus);

module.exports = resto_route;
