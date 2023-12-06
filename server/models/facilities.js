"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class facilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      facilities.hasMany(models.resto_menus, {
        foreignKey: "reme_faci_id",
      });
    }
  }
  facilities.init(
    {
      faci_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "facilities",
    }
  );
  return facilities;
};
