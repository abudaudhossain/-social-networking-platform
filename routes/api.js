const express = require('express');

const router = express.Router();

const welcome = require('../app/controllers/welcome')

// middleware


router.get('/', welcome.welcome)


module.exports = router;