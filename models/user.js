'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.JobSeekerProfile, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      User.hasOne(models.RecruiterProfile, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      User.hasMany(models.Swipe, { as: 'SwipesGiven', foreignKey: 'swiper_id' });
      User.hasMany(models.Swipe, { as: 'SwipesReceived', foreignKey: 'swiped_id' });
      User.hasMany(models.Conversation, { as: 'Conversations1', foreignKey: 'user1_id' });
      User.hasMany(models.Conversation, { as: 'Conversations2', foreignKey: 'user2_id' });
      User.hasMany(models.Message, { as: 'SentMessages', foreignKey: 'sender_id' });
      User.hasMany(models.Message, { as: 'ReceivedMessages', foreignKey: 'receiver_id' });


    }
  }
  User.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};