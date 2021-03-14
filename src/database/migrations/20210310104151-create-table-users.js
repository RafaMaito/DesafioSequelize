module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'users',
      {
        uid: {
          type: Sequelize.UUID,
          defaulfValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        schema: 'forum',
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable({
      tableName: 'users',
      schema: 'forum',
    });
  },
};
