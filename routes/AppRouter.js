const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const JobSeekerProfileRouter = require('./JobSeekerProfileRouter')
const RecruiterProfileRouter = require('./RecruiterProfileRouter')

Router.use('/auth', AuthRouter)
Router.use('/jobseeker', JobSeekerProfileRouter)
Router.use('/recruiter', RecruiterProfileRouter)

module.exports = Router