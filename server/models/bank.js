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
      bank.hasOne(models.entity, {
        foreignKey: "bank_entity_id",
      });

      bank.hasMany(models.user_accounts, {
        foreignKey: "usac_entity_id",
      });
    }
  }
  bank.init(
    {
      bank_entity_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        references: {
          model: "entity",
          key: "entity_id",
        },
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
