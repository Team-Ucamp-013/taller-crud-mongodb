const express = require('express')
const router = express.Router()

const granjaRouter = require('./collection')

router.use('/granja', granjaRouter)

module.exports = router