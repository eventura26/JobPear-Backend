'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jobseekerprofiles', {
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
      currently_employed: {
        type: Sequelize.BOOLEAN
      },
      job_field: {
        type: Sequelize.STRING
      },
      seeking_role: {
        type: Sequelize.STRING
      },
      skills: {
        type: Sequelize.TEXT
      },
      experience_years: {
        type: Sequelize.INTEGER
      },
      desired_salary: {
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
    await queryInterface.dropTable('jobseekerprofiles');
  }
};