const express = require('express');

const router = express.Router();

const welcome = require('../app/controllers/welcome');
const auth = require('../app/controllers/auth');

// middleware
const userAuth = require('../app/middleware/userAuth');
const profile = require('../app/controllers/profile');


router.get('/', userAuth, welcome.welcome)

router.post("/signup", auth.reg)
router.post("/login", auth.login)
router.get("/logout", userAuth, auth.logout)


router.get("/me", userAuth, profile.userProfile)
router.put("/me", userAuth, profile.updateProfile)
router.post("/me/add/social-accounts", userAuth, profile.addSocialAccountInProfile)

router.get("/user-list", userAuth, profile.profileList)
router.get("/user/details/:userId", userAuth, profile.profileByUserId)

module.exports = router;