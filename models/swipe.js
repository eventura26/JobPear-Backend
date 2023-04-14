'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Swipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Swipe.belongsTo(models.User, { as: 'Swiper', foreignKey: 'swiper_id' });
      Swipe.belongsTo(models.User, { as: 'SwipedUser', foreignKey: 'swiped_id' });
    }
  }
  Swipe.init({
    swiped_id: {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      type: DataTypes.INTEGER,
      allowNull: true,
      reference: {
        model: "users",
        key: "id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    }, 
    swiper_id: {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      type: DataTypes.INTEGER,
      allowNull: true,
      reference: {
        model: "users",
        key: "id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    }, 
    direction: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Swipe',
    tableName: 'swipes'
  });
  return Swipe;
};