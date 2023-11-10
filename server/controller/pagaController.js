const { payment_gateaway, entity } = require("../models");

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
      const { paga_code, paga_name } = req.body;
      let paga_modified_date = new Date();
      let entity_modified_date = new Date();

      let resultId = await entity.create(
        {
          entity_modified_date,
        },
        {
          returning: true,
        }
      );

      let result = await payment_gateaway.create({
        paga_entity_id: resultId.entity_id,
        paga_code,
        paga_name,
        paga_modified_date,
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err.message);
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
