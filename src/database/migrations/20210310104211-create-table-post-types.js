module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'post_types',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
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
      tableName: 'post_types',
      schema: 'forum',
    });
  },
};
