"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class payment_transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payment_transaction.init(
    {
      patr_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      patr_trx_number: {
        type: DataTypes.STRING,
        unique: true,
      },
      patr_debit: DataTypes.INTEGER,
      patr_credit: DataTypes.INTEGER,
      patr_type: DataTypes.STRING,
      patr_type: DataTypes.STRING,
      patr_note: DataTypes.STRING,
      patr_modified_date: DataTypes.DATE,
      patr_order_number: DataTypes.STRING,
      patr_source_id: DataTypes.INTEGER,
      patr_target_id: DataTypes.INTEGER,
      patr_trx_number_ref: {
        type: DataTypes.STRING,
        unique: true,
      },
      patr_user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "payment_transaction",
    }
  );
  return payment_transaction;
};
