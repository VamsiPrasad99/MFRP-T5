const express = require('express')
const router = express.Router()
//api/index.js

require('./routes/flights')(router)

module.exports = router 