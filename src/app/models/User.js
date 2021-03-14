import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
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
      },
      {
        sequelize,
        schema: 'forum',
        tableName: 'users',
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Post, {
      as: 'posts',
      foreignKey: 'user_uid',
    });
  }
}

export default User;
