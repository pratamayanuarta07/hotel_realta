"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("order_menu_details", {
      omde_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orme_price: {
        type: Sequelize.INTEGER,
      },
      orme_qty: {
        type: Sequelize.SMALLINT,
      },
      orme_subtotal: {
        type: Sequelize.INTEGER,
      },
      orme_discount: {
        type: Sequelize.SMALLINT,
      },
      omde_orme_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: false,
        references: {
          model: { tableName: "order_menus" },
          key: "orme_id",
        },
      },
      omde_reme_id: {
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
    await queryInterface.dropTable("order_menu_details");
  },
};
