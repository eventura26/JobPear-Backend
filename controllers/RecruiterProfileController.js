const { RecruiterProfile } = require("../models");
const { User } = require("../models")


const findAllProfiles = async (req, res) =>{
  try{
    const profile = await RecruiterProfile.findAll({ include: [{ model: User}]})
    res.send(profile)
  }catch(error){
    throw error
  }
}

const getProfile = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const profile = await RecruiterProfile.findOne({
      where: { user_id: userId },
      include: [{ model: User }],
    });

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    res.json({ success: true, profile });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

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

const updateProfile = async (req, res) => {
  const {
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
  const { id } = req.params;

  try {
    const profile = await JobSeekerProfile.findOne({
      where: { user_id: id }
    });

    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }

    await profile.update({
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

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const deleteProfile = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const profile = await RecruiterProfile.findOne({ where: { user_id: userId } });

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    await profile.destroy();
    res.json({ success: true, message: "Profile deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};


module.exports = {
createProfile,
updateProfile, 
getProfile, 
findAllProfiles, 
deleteProfile };