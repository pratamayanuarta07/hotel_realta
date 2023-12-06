"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("resto_menus", {
      reme_faci_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: false,
        primaryKey: true,
        references: {
          model: { tableName: "facilities" },
          key: "faci_id",
        },
      },
      reme_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      reme_name: {
        type: Sequelize.STRING(55),
      },
      reme_description: {
        type: Sequelize.STRING(255),
      },
      reme_price: {
        type: Sequelize.INTEGER,
      },
      reme_status: {
        type: Sequelize.STRING(15),
      },
      reme_modified_date: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("resto_menus");
  },
};
