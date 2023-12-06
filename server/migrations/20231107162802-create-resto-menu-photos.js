"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("resto_menu_photos", {
      remp_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      remp_thumbnail_filename: {
        type: Sequelize.STRING(50),
      },
      remp_photo_filename: {
        type: Sequelize.STRING(50),
      },
      remp_primary: {
        type: Sequelize.BOOLEAN,
      },
      remp_url: {
        type: Sequelize.STRING(255),
      },
      remp_reme_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: false,
        references: {
          model: { tableName: "resto_menus" },
          key: "reme_id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("resto_menu_photos");
  },
};
