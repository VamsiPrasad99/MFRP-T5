const express = require('express')
const router = express.Router()
//api/index.js

require('./routes/offers')(router)

module.exports = router 