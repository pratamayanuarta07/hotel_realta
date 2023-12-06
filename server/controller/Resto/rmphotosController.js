const { resto_menu_photos } = require("../../models");
const fs = require("fs");

const getDataPhotos = async (req, res) => {
  try {
    const result = await resto_menu_photos.findAll({
      order: [["remp_id", "ASC"]],
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addPhoto = async (req, res) => {
  try {
    if (req.file) {
      const { file, remp_reme_id } = req.body;
      const url = `${req.protocol}://${req.get("host")}/resto/${
        req.file.filename
      }`;
      const result = await resto_menu_photos.create({
        remp_thumbnail_filename: req.file.filename,
        remp_photo_filename: req.file.filename,
        remp_primary: true,
        remp_url: url,
        remp_reme_id: remp_reme_id,
      });
      res.status(200).json(result);
    } else {
      throw new Error(`foto tidak ada, upload terlebih dahulu`);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editPhoto = async (req, res) => {
  try {
    const {
      remp_thumbnail_filename,
      remp_photo_filename,
      remp_primary,
      remp_url,
      remp_reme_id,
    } = req.body;
    let id = +req.params.id;
    console.log(req.body);
    const result = await resto_menu_photos.update(
      {
        remp_thumbnail_filename: remp_thumbnail_filename,
        remp_photo_filename: remp_photo_filename,
        remp_primary: remp_primary,
        remp_url: remp_url,
        remp_reme_id: remp_reme_id,
      },
      { where: { remp_id: id } }
    );
    if (result == 0) {
      throw new Error(`photo id ${id} not edited`);
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const delPhoto = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    const image = req.params.image;
    console.log(image);
    const path = `./public/resto/${image}`;
    console.log(path);
    fs.unlinkSync(path);
    const result = await resto_menu_photos.destroy({
      where: { remp_id: id },
      returning: true,
    });
    if (!result) {
      throw new Error(`photo id ${id} not deleted`);
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDetailPhoto = async (req, res) => {
  try {
    let id = +req.params.id;
    const result = await resto_menu_photos.findOne({
      where: { remp_id: id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDataPhotos,
  addPhoto,
  editPhoto,
  delPhoto,
  getDetailPhoto,
};
