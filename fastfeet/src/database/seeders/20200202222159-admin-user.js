const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'Guilherme França',
      email: 'guilherme_tecnologia@outlook.com',
      password_hash: bcrypt.hashSync('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
