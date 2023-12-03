const { user_accounts } = require("../../models");

class UsacController {
  static async getUsac(req, res) {
    try {
      let Usac = await user_accounts.findAll({
        order: [["id", "ASC"]],
        // include: [User],
      });

      res.status(200).json(Usac);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async create(req, res) {
    try {
      const { usac_account_number, usac_saldo, usac_type, usac_expmonth, usac_expyear } = req.body;
      let usac_modified_date = new Date();

      let result = await user_accounts.create({
        usac_account_number,
        usac_saldo,
        usac_type,
        usac_expmonth,
        usac_expyear,
        usac_modified_date,
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  static async delete(req, res) {
    try {
      let id = +req.params.id;

      let result = await user_accounts.destroy({
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
      const { usac_account_number, usac_saldo, usac_type, usac_expmonth, usac_expyear } = req.body;

      let result = await user_accounts.update(
        {
          usac_account_number,
          usac_saldo,
          usac_type,
          usac_expmonth,
          usac_expyear,
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

      let result = await user_accounts.findByPk(id);

      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `Usac id ${id} not found`,
          });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

module.exports = UsacController;
