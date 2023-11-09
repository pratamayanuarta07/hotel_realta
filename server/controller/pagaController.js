const { payment_gateaway } = require("../models");

class PagaController {
  static async getPaga(req, res) {
    try {
      let Paga = await Paga.findAll({
        order: [["id", "ASC"]],
        // include: [User],
      });

      res.status(200).json(Paga);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    try {
      const { title, content, author, category } = req.body;
      let imageUrl = "https://via.placeholder.com/100";
      let status = true;

      let result = await Paga.create({
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

      let result = await Paga.destroy({
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

      let result = await Paga.update(
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

      let result = await Paga.findByPk(id);

      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `Paga id ${id} not found`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = PagaController;
