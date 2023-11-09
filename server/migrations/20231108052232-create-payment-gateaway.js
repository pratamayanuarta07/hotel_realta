"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("payment_gateaways", {
      paga_entity_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: {
            tableName: "entities",
          },
          key: "entity_id",
        },
      },
      paga_code: {
        type: Sequelize.STRING(10),
      },
      paga_name: {
        type: Sequelize.STRING(55),
      },
      paga_modified_date: {
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
    await queryInterface.dropTable("payment_gateaways");
  },
};