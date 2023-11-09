"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("payment_transactions", {
      patr_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      patr_trx_number: {
        type: Sequelize.STRING(55),
      },
      patr_debit: {
        type: Sequelize.INTEGER,
      },
      patr_credit: {
        type: Sequelize.INTEGER,
      },
      patr_type: {
        type: Sequelize.STRING(3),
      },
      patr_note: {
        type: Sequelize.STRING,
      },
      patr_modified_date: {
        type: Sequelize.DATE,
      },
      patr_order_number: {
        type: Sequelize.STRING(55),
      },
      patr_source_id: {
        type: Sequelize.INTEGER,
      },
      patr_target_id: {
        type: Sequelize.INTEGER,
      },
      patr_trx_number_ref: {
        type: Sequelize.STRING(55),
      },
      patr_user_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
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
    await queryInterface.dropTable("payment_transactions");
  },
};
