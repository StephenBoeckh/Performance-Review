'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Fundlists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      risk: {
        type: Sequelize.STRING
      },
      yeara: {
        type: Sequelize.FLOAT
      },
      yearb: {
        type: Sequelize.FLOAT
      },
      yearc: {
        type: Sequelize.FLOAT
      },
      yeard: {
        type: Sequelize.FLOAT
      },
      yeare: {
        type: Sequelize.FLOAT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Fundlists');
  }
};