const router = require('express').Router()
const controller = require('../controllers/JobSeekerProfileController')
router.post('/update', controller.createProfile)


module.exports = router
