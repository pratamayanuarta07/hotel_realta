"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order_menu_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order_menu_detail.belongsTo(models.resto_menus, {
        foreignKey: "omde_orme_id",
      });
      order_menu_detail.belongsTo(models.order_menus, {
        foreignKey: "order_id",
      });
    }
  }
  order_menu_detail.init(
    {
      omde_id: DataTypes.NUMBER,
      orme_price: DataTypes.INTEGER,
      orme_qty: DataTypes.SMALLINT,
      orme_subtotal: DataTypes.INTEGER,
      orme_discount: DataTypes.SMALLINT,
      omde_orme_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        references: {
          model: "order_menus",
          key: "order_id",
        },
      },
      omde_reme_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        references: {
          model: "resto_menus",
          key: "reme_id",
        },
      },
    },
    {
      sequelize,
      modelName: "order_menu_detail",
    }
  );
  return order_menu_detail;
};
