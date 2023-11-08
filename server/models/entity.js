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
      // define association here
    }
  }
  entity.init(
    {
      entity_modified_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "entity",
    }
  );
  return entity;
};
