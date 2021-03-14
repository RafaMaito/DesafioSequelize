module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'posts',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        user_uid: {
          type: Sequelize.UUID,
          allowNull: true,
          references: {
            model: 'users',
            key: 'uid',
          },
        },
        type_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'post_types',
            key: 'id',
          },
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
      tableName: 'posts',
      schema: 'forum',
    });
  },
};
