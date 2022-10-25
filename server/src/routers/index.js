const express = require('express')
const mainRouter = express.Router()

mainRouter.use('/', (req, res)=> {
 res.status(200).json({message:'Wellcome Rest Api sos fomt progress'})
})

module.exports = mainRouter