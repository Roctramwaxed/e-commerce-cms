'use strict';

const { hashing } = require("../helpers/bcrpyt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',
    [
      {
        email: 'admin@mail.com',
        password: hashing('1234'),
        role: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    )
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
