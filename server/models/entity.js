"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class entity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      entity.hasOne(models.bank, {
        foreignKey: "bank_entity_id",
      });

      entity.hasOne(models.payment_gateaway, {
        foreignKey: "paga_entity_id",
      });

      entity.hasMany(models.user_accounts, {
        foreignKey: "usac_entity_id",
      });
    }
  }
  entity.init(
    {
      entity_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      entity_modified_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "entity",
    }
  );
  return entity;
};
