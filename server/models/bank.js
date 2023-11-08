"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bank.init(
    {
      bank_entity_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      bank_code: {
        type: DataTypes.STRING,
        unique: true,
      },
      bank_name: {
        type: DataTypes.STRING,
        unique: true,
      },
      bank_modified_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "bank",
    }
  );
  return bank;
};
