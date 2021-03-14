import Sequelize, { Model } from 'sequelize';

class PostType extends Model {
  static init(sequelize) {
    super.init(
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
      },
      {
        sequelize,
        schema: 'forum',
        tableName: 'post_types',
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Post, {
      as: 'posts',
      foreignKey: 'type_id',
    });
  }
}
export default PostType;
