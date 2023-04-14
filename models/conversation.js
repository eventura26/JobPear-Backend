'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Conversation.belongsTo(models.User, { as: 'User1', foreignKey: 'user1_id' });
      Conversation.belongsTo(models.User, { as: 'User2', foreignKey: 'user2_id' });
      Conversation.hasMany(models.Message, { as: 'Messages', foreignKey: 'conversation_id' });
    }
  }
  Conversation.init({
    user1_id: {
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
    user2_id: {
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
    }
  }, {
    sequelize,
    modelName: 'Conversation',
    tableName: 'conversations'
  });
  return Conversation;
};
