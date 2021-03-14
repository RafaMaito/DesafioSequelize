import Sequelize, { Model } from 'sequelize';

class Post extends Model {
  static init(sequelize) {
    super.init(
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
            model: 'phone_types',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        schema: 'forum',
        tableName: 'posts',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.PostType, {
      as: 'type',
      foreignKey: 'type_id',
    });

    this.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_uid',
    });
  }
}

export default Post;
