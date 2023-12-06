const { resto_menus, resto_menu_photos } = require("../../models");

const getDataMenus = async (req, res) => {
  try {
    const result = await resto_menus.findAll({
      order: [["reme_id", "ASC"]],
      include: { model: resto_menu_photos, attributes: ["remp_url"] },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addMenu = async (req, res) => {
  try {
    const { reme_name, reme_description, reme_price, reme_status } = req.body;
    const result = await resto_menus.create({
      reme_faci_id: 1,
      reme_name: reme_name,
      reme_description: reme_description,
      reme_price: reme_price,
      reme_status: reme_status,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editMenu = async (req, res) => {
  try {
    const { reme_name, reme_description, reme_price, reme_status } = req.body;
    let id = +req.params.id;
    console.log(req.body);
    const result = await resto_menus.update(
      {
        reme_name: reme_name,
        reme_description: reme_description,
        reme_price: reme_price,
        reme_status: reme_status,
      },
      { where: { reme_id: id } }
    );
    if (result == 0) {
      throw new Error(`menu id ${id} not edited`);
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const delMenu = async (req, res) => {
  try {
    let id = +req.params.id;
    const result = await resto_menus.destroy({ where: { reme_id: id } });
    if (!result) {
      throw new Error(`menu id ${id} not deleted`);
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDetailMenu = async (req, res) => {
  try {
    let id = +req.params.id;
    const result = await resto_menus.findOne({
      where: { reme_id: id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDataMenus,
  addMenu,
  editMenu,
  delMenu,
  getDetailMenu,
};
