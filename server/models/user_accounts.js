"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_accounts.init(
    {
      usac_entity_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      usac_user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      usac_account_number: {
        type: DataTypes.STRING,
        unique: true,
      },
      usac_saldo: DataTypes.INTEGER,
      usac_type: DataTypes.STRING,
      usac_expmonth: DataTypes.INTEGER,
      usac_expyear: DataTypes.SMALLINT,
      usac_modified_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "user_accounts",
    }
  );
  return user_accounts;
};
