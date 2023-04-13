const router = require('express').Router()
const controller = require('../controllers/RecruiterProfileController')
router.post('/update', controller.createProfile)


module.exports = router
