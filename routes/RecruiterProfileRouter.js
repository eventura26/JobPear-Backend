const router = require('express').Router()
const controller = require('../controllers/RecruiterProfileController')
router.get("/", controller.findAllProfiles);
router.get("/:user_id", controller.getProfile);
router.post('/create', controller.createProfile)
router.put('/profiles/:id', controller.updateProfile)
router.delete("/:user_id", controller.deleteProfile);

module.exports = router
