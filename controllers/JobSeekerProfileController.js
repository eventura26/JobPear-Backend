const { JobSeekerProfile } = require("../models");

const createProfile = async (req, res) => {
  const {
    user_id,
    currently_employed,
    job_field,
    seeking_role,
    skills,
    experience_years,
    desired_salary,
    photo,
    about,
    linkedin,
    website,
  } = req.body;

  try {
    const profile = await JobSeekerProfile.create({
      user_id,
      currently_employed,
      job_field,
      seeking_role,
      skills,
      experience_years,
      desired_salary,
      photo,
      about,
      linkedin,
      website,
    });

    res.json({ success: true, profile });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { createProfile };
