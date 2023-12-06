"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("order_menus", {
      orme_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orme_order_number: {
        type: Sequelize.STRING(20),
      },
      orme_order_time: {
        type: Sequelize.DATE,
      },
      orme_total_item: {
        type: Sequelize.SMALLINT,
      },
      orme_total_discount: {
        type: Sequelize.SMALLINT,
      },
      orme_total_amount: {
        type: Sequelize.INTEGER,
      },
      orme_pay_type: {
        type: Sequelize.STRING(2),
      },
      orme_cardnumber: {
        type: Sequelize.STRING(25),
      },
      orme_is_paid: {
        type: Sequelize.STRING(2),
      },
      orme_modified_date: {
        type: Sequelize.DATE,
      },
      orme_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: false,
        references: {
          model: { tableName: "users" },
          key: "user_id",
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
    await queryInterface.dropTable("order_menus");
  },
};
