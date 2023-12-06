"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class resto_menu_photos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      resto_menu_photos.belongsTo(models.resto_menus, {
        foreignKey: "remp_reme_id",
      });
    }
  }
  resto_menu_photos.init(
    {
      remp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      remp_thumbnail_filename: DataTypes.STRING,
      remp_photo_filename: DataTypes.STRING,
      remp_primary: DataTypes.BOOLEAN,
      remp_url: DataTypes.STRING,
      remp_reme_id: {
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
      modelName: "resto_menu_photos",
    }
  );
  return resto_menu_photos;
};
