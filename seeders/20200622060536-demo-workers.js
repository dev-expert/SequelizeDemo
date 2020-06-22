'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Workers', [{
      firstName: 'Test',
      lastName: 'Test',
      email: 'test@test.com',
      bio: 'Im an from worker table',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Workers', null, {});
  }
};
