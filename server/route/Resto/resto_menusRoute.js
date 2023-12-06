const resto_menus = require("express").Router();
const {
  getDataMenus,
  addMenu,
  editMenu,
  delMenu,
  getDetailMenu,
} = require("../../controller/Resto/resto_menusController");

resto_menus.get("/", getDataMenus);
resto_menus.post("/add", addMenu);
resto_menus.put("/edit/:id", editMenu);
resto_menus.delete("/del/:id", delMenu);
resto_menus.get("/menu/:id", getDetailMenu);

module.exports = resto_menus;
