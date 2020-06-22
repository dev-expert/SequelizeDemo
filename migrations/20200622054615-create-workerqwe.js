'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Workers',
        'bio',
        {
          type: Sequelize.STRING
        }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
    ]);
  }
};
