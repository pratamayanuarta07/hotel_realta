const rmphotos = require("express").Router();
const {
  getDataPhotos,
  addPhoto,
  editPhoto,
  delPhoto,
  getDetailPhoto,
} = require("../../controller/Resto/rmphotosController");
const uploadResto = require("../../middleware/upload");

rmphotos.get("/", getDataPhotos);
rmphotos.post("/add", uploadResto.single("file"), addPhoto);
rmphotos.delete("/del/:id/:image", delPhoto);
rmphotos.get("/detail/:id", getDetailPhoto);

module.exports = rmphotos;
