const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc      Authenticate with Google
// @route     GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile']}))

// @desc      Google Auth Callback
// @route     GET /auth/google/callback

//Success -> /dashboard || Failure -> /
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req, res) => {
    res.redirect('/dashboard')
})

// @desc      Logout User
// @route     GET /auth/logout
// Passport 0.6 requires logout to be an async function

router.get('/logout', (req, res, next) => {
    req.logout(function(err){
        if (err) {return next(err)}
        res.redirect('/')
    })
})

module.exports = router