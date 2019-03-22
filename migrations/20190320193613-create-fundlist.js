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
      2018: {
        type: Sequelize.FLOAT
      },
      2017: {
        type: Sequelize.FLOAT
      },
      2016: {
        type: Sequelize.FLOAT
      },
      2015: {
        type: Sequelize.FLOAT
      },
      2014: {
        type: Sequelize.FLOAT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Fundlists');
  }
};