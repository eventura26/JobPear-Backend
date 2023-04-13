const { RecruiterProfile } = require("../models");

const createProfile = async (req, res) => {
  const {
    user_id,
    company,
    job_field,
    desired_role,
    desired_skills,
    desired_experience_years,
    salary_offered,
    photo,
    about,
    linkedin,
    website,
  } = req.body;

  try {
    await RecruiterProfile.create({
      user_id,
      company,
      job_field,
      desired_role,
      desired_skills,
      desired_experience_years,
      salary_offered,
      photo,
      about,
      linkedin,
      website,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { createProfile };
