'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobSeekerProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobSeekerProfile.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  JobSeekerProfile.init({
    user_id: {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      type: DataTypes.INTEGER,
      reference: {
        model: "users",
        key: "id",
      },
    }, 
    currently_employed: DataTypes.BOOLEAN,
    job_field: DataTypes.STRING,
    seeking_role: DataTypes.STRING,
    skills: DataTypes.TEXT,
    experience_years: DataTypes.INTEGER,
    desired_salary: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    about: DataTypes.TEXT,
    linkedin: DataTypes.STRING,
    website: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JobSeekerProfile',
    tableName: 'jobseekerprofiles'
  });
  return JobSeekerProfile;
};