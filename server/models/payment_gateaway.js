"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class payment_gateaway extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      payment_gateaway.hasOne(models.entity, {
        foreignKey: "paga_entity_id",
      });

      payment_gateaway.hasMany(models.user_accounts, {
        foreignKey: "usac_entity_id",
      });
    }
  }
  payment_gateaway.init(
    {
      paga_entity_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        references: {
          model: "entity",
          key: "entity_id",
        },
      },
      paga_code: {
        type: DataTypes.STRING,
        unique: true,
      },
      paga_name: {
        type: DataTypes.STRING,
        unique: true,
      },
      paga_modified_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "payment_gateaway",
    }
  );
  return payment_gateaway;
};
