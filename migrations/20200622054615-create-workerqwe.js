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
      // queryInterface.addColumn(
      //   'tryout_sections',
      //   'import_section_id',
      //   {
      //     type: Sequelize.STRING
      //   }),
      // queryInterface.addColumn(
      //   'tryout_questions',
      //   'import_question_id',
      //   {
      //     type: Sequelize.STRING
      //   })
       
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      // queryInterface.removeColumn('tryouts', 'import_tryout_id'),
      // queryInterface.removeColumn('tryout_sections', 'import_section_id'),
      // queryInterface.removeColumn('tryout_questions', 'import_question_id')
    ]);
  }
};
