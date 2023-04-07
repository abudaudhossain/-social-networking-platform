const express = require('express');

const router = express.Router();

const welcome = require('../app/controllers/welcome');
const auth = require('../app/controllers/auth');

// middleware
const userAuth = require('../app/middleware/userAuth');


router.get('/', userAuth, welcome.welcome)

router.post("/signup", auth.reg)
router.post("/login", auth.login)
router.get("/logout", userAuth, auth.logout)


module.exports = router;