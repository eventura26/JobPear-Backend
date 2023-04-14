'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.belongsTo(models.User, { as: 'Sender', foreignKey: 'sender_id' });
      Message.belongsTo(models.User, { as: 'Receiver', foreignKey: 'receiver_id' });
      Message.belongsTo(models.Conversation, { as: 'Conversation', foreignKey: 'conversation_id' });
    }
  }
  Message.init({
    conversation_id: {
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
    sender_id: {
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
    receiver_id: {
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
    content: DataTypes.TEXT,
    read: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Message',
    tableName: 'messages'
  });
  return Message;
};