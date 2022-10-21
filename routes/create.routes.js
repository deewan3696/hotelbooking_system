const express = require('express')
const router = express.Router()
const { creating , booking }  = require('../controllers/create.controllers')




router.post('/create-customers', creating)

router.post('/create-bookings', booking)


module.exports = router