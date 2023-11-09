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
      user_accounts.belongsToMany(models.bank, {
        foreignKey: "usac_entity_id",
      });

      user_accounts.belongsToMany(models.payment_gateaway, {
        foreignKey: "usac_entity_id",
      });
    }
  }
  user_accounts.init(
    {
      usac_entity_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: "bank",
          key: "bank_entity_id",
        },
        references: {
          model: "payment_gateaway",
          key: "paga_entity_id",
        },
      },
      usac_user_id: {
        allowNull: false,
        autoIncrement: true,
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
