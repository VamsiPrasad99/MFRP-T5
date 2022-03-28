const express = require('express')
const router = express.Router()
//api/index.js

require('./routes/ticket')(router)

module.exports = router 