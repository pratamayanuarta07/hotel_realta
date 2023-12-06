"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order_menus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order_menus.hasMany(models.order_menu_detail, {
        foreignKey: "omde_orme_id",
      });
      order_menus.belongsTo(models.users, {
        foreignKey: "orme_user_id",
      });
    }
  }
  order_menus.init(
    {
      orme_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      orme_order_number: DataTypes.STRING,
      orme_order_time: DataTypes.DATE,
      orme_total_item: DataTypes.SMALLINT,
      orme_total_discount: DataTypes.SMALLINT,
      orme_total_amount: DataTypes.INTEGER,
      orme_pay_type: DataTypes.STRING,
      orme_cardnumber: DataTypes.STRING,
      orme_is_paid: DataTypes.STRING,
      orme_modified_date: DataTypes.DATE,
      orme_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        references: {
          model: "users",
          key: "user_id",
        },
      },
    },
    {
      sequelize,
      modelName: "order_menus",
    }
  );
  return order_menus;
};
