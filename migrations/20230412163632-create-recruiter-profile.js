'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recruiterprofiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        type: Sequelize.INTEGER,
        reference: {
          model: "users",
          key: "id"
        }
      },
      company: {
        type: Sequelize.STRING
      },
      job_field: {
        type: Sequelize.STRING
      },
      desired_role: {
        type: Sequelize.STRING
      },
      desired_skills: {
        type: Sequelize.TEXT
      },
      desired_experience_years: {
        type: Sequelize.INTEGER
      },
      salary_offered: {
        type: Sequelize.INTEGER
      },
      photo: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.TEXT
      },
      linkedin: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recruiterprofiles');
  }
};