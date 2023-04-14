'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecruiterProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RecruiterProfile.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  RecruiterProfile.init({
    user_id: {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      type: DataTypes.INTEGER,
      allowNull: true,
      reference: {
        model: "users",
        key: "id",
      },
    }, 
    company: DataTypes.STRING,
    job_field: DataTypes.STRING,
    desired_role: DataTypes.STRING,
    desired_skills: DataTypes.TEXT,
    desired_experience_years: DataTypes.INTEGER,
    salary_offered: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    about: DataTypes.TEXT,
    linkedin: DataTypes.STRING,
    website: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RecruiterProfile',
    tableName: 'recruiterprofiles'
  });
  return RecruiterProfile;
};