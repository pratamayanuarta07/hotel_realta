"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user_accounts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      usac_entity_id: {
        type: Sequelize.INTEGER,
      },
      usac_user_id: {
        type: Sequelize.INTEGER,
      },
      usac_account_number: {
        type: Sequelize.STRING(25),
      },
      usac_saldo: {
        type: Sequelize.INTEGER,
      },
      usac_type: {
        type: Sequelize.STRING(15),
      },
      usac_expmonth: {
        type: Sequelize.INTEGER,
      },
      usac_expyear: {
        type: Sequelize.SMALLINT,
      },
      usac_modified_date: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("user_accounts");
  },
};
