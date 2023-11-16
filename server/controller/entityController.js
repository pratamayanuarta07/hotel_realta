const { entity, bank, payment_gateaway } = require("../models");

class EntityController {
  static async getEntity(req, res) {
    try {
      let result = await entity.findAll({
        include: [bank, payment_gateaway],
        // order: [["ASC"]],
      });

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async create(req, res) {
    try {
      //   const { entity_code, entity_name } = req.body;
      let entity_modified_date = new Date();

      let result = await entity.create(
        {
          entity_modified_date,
        },
        {
          returning: true,
        }
      );

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async delete(req, res) {
    try {
      let id = +req.params.id;

      let result = await entity.destroy({
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
      res.status(500).json(err.message);
    }
  }
  static async update(req, res) {
    try {
      let id = +req.params.id;
      const { title, content, author, category, status, imageUrl } = req.body;

      let result = await entity.update(
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
      res.status(500).json(err.message);
    }
  }
  static async getDetails(req, res) {
    try {
      const id = +req.params.id;

      let result = await entity.findByPk(id);

      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `entity id ${id} not found`,
          });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

module.exports = EntityController;
