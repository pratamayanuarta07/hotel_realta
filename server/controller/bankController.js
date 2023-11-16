const { bank, entity } = require("../models");

class BankController {
  static async getBank(req, res) {
    try {
      let Bank = await bank.findAll({
        order: [["id", "ASC"]],
        // include: [User],
      });

      res.status(200).json(Bank);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async create(req, res) {
    try {
      const { bank_code, bank_name } = req.body;
      let bank_modified_date = new Date();
      let entity_modified_date = new Date();

      let resultId = await entity.create(
        {
          entity_modified_date,
        },
        {
          returning: true,
        }
      );

      let result = await bank.create({
        bank_entity_id: resultId.entity_id,
        bank_code,
        bank_name,
        bank_modified_date,
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async delete(req, res) {
    try {
      let id = +req.params.id;

      let result = await bank.destroy({
        where: { bank_entity_id: id },
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
      const { bank_code, bank_name } = req.body;
      let bank_modified_date = new Date();

      let result = await bank.update(
        {
          bank_code,
          bank_name,
          bank_modified_date,
        },
        {
          where: { bank_entity_id: id },
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

      let result = await bank.findByPk(id);

      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `Bank id ${id} not found`,
          });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

module.exports = BankController;
