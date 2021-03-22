module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      {
        tableName: 'users',
        schema: 'forum',
      },
      'password_hash',
      {
        type: Sequelize.STRING,
        allowNull: true,
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.removeColumn(
      {
        tableName: 'users',
        schema: 'forum',
      },
      'password_hash'
    );
  },
};
