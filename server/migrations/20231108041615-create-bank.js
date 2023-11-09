"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("banks", {
      bank_entity_id: {
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
      bank_code: {
        type: Sequelize.STRING(10),
      },
      bank_name: {
        type: Sequelize.STRING(55),
      },
      bank_modified_date: {
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
    await queryInterface.dropTable("banks");
  },
};
