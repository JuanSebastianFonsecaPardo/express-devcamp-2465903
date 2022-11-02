'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('users', [{
      username: 'John Doe',
      email:'JhonDoe@mail.com',
      password: '1234'
    },
    {
      username: 'Anni',
      email:'anni@mail.com',
      password: '1234'
    },
    {
      username: 'carlos',
      email:'carlos@mail.com',
      password: '1234'
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
