"use strict";
const { Model } = require("sequelize");
const resto_menu_photos = require("./resto_menu_photos");
module.exports = (sequelize, DataTypes) => {
  class resto_menus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      resto_menus.belongsTo(models.facilities, {
        foreignKey: "reme_faci_id",
      });
      resto_menus.hasMany(models.resto_menu_photos, {
        foreignKey: "remp_reme_id",
      });
      resto_menus.hasMany(models.order_menu_detail, {
        foreignKey: "omde_reme_id",
      });
    }
  }
  resto_menus.init(
    {
      reme_faci_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        autoIncrement: false,
        primaryKey: false,
        references: {
          model: "facilities",
          key: "faci_id",
        },
      },
      reme_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      reme_name: DataTypes.STRING,
      reme_description: DataTypes.STRING,
      reme_price: DataTypes.INTEGER,
      reme_status: DataTypes.STRING,
      reme_modified_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "resto_menus",
    }
  );
  return resto_menus;
};
