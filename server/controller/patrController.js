const { payment_transaction } = require("../models");

class PatrController {
  static async getPatr(req, res) {
    try {
      let Patr = await payment_transaction.findAll({
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
      const { patr_trx_number, patr_debit, patr_credit, patr_type, patr_note, patr_order_number, patr_source_id, patr_target_id, patr_trx_number_ref, patr_user_id } = req.body;
      let patr_modified_date = new Date();

      let result = await payment_transaction.create({
        patr_trx_number,
        patr_debit,
        patr_credit,
        patr_type,
        patr_note,
        patr_modified_date,
        patr_order_number,
        patr_source_id,
        patr_target_id,
        patr_trx_number_ref,
        patr_user_id,
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async delete(req, res) {
    try {
      let id = +req.params.id;

      let result = await payment_transaction.destroy({
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
      const { patr_trx_number, patr_debit, patr_credit, patr_type, patr_note, patr_order_number, patr_source_id, patr_target_id, patr_trx_number_ref, patr_user_id } = req.body;

      let result = await payment_transaction.update(
        {
          patr_trx_number,
          patr_debit,
          patr_credit,
          patr_type,
          patr_note,
          patr_order_number,
          patr_source_id,
          patr_target_id,
          patr_trx_number_ref,
          patr_user_id,
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

      let result = await payment_transaction.findByPk(id);

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
