const { Patr } = require("../models");

class PatrController {
  static async getPatr(req, res) {
    try {
      let Patr = await Patr.findAll({
        order: [["id", "ASC"]],
        // include: [User],
      });

      res.status(200).json(Patr);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    try {
      const { title, content, author, category } = req.body;
      let imageUrl = "https://via.placeholder.com/100";
      let status = true;

      let result = await Patr.create({
        title,
        content,
        author,
        category,
        status,
        imageUrl,
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async delete(req, res) {
    try {
      let id = +req.params.id;

      let result = await Patr.destroy({
        where: { id: id },
      });

      result === 1
        ? res.status(200).json({
            message: `Id ${id} has been deleted.`,
          })
        : res.status(400).json({
            message: `Id ${id} has not been deleted.`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async update(req, res) {
    try {
      let id = +req.params.id;
      const { title, content, author, category, status, imageUrl } = req.body;

      let result = await Patr.update(
        {
          title,
          content,
          author,
          category,
          status,
          imageUrl,
        },
        {
          where: { id: id },
        }
      );

      result[0] === 1
        ? res.status(200).json({
            message: `Id ${id} has been updated.`,
          })
        : res.status(400).json({
            message: `Id ${id} has not been updated.`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getDetails(req, res) {
    try {
      const id = +req.params.id;

      let result = await Patr.findByPk(id);

      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `Patr id ${id} not found`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = PatrController;
