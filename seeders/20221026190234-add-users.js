'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('users', [{
        username: 'John Doe',
        email: 'john@gmail.com',
        password: '12345'
      },
      {
        username: 'Samuel',
        email: 'samuel@gmail.com',
        password: '12345'
      },
      {
        username: 'Pedro',
        email: 'pedro@gmail.com',
        password: '12345'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('users', null, {});

  }
};
