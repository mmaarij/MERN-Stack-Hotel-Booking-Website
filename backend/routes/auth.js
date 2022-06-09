var express = require('express');
var router = express.Router();
const passport = require('passport')
const jwt = require("jsonwebtoken")

ACCESS_TOKEN_SECRET = "kajnkankjxnasnxkajsxkansx"


function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "15m" })
}


router.get('/google',
    passport.authenticate('google', {scope: ['profile', 'email']}), (req, res) => {
    });

router.get('/google/callback',
    passport.authenticate('google', {failureRedirect: '/login'}),
    function (req, res) {
        // Successful authentication, redirect home.
        var name = req.user.name;
        var email = req.user.email;
        const token = generateAccessToken({ user: email });
        res.status(200).send({ name: name, email: email, data: token, message: "Logged in successfully" });
    });

router.get('/facebook',
    passport.authenticate('facebook' , { scope : ['email'] }), (req, res) => {
    });

router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        var name = req.user.name;
        var email = req.user.email;
        const token = generateAccessToken({ user: email });
        res.status(200).send({ name: name, email: email, data: token, message: "Logged in successfully" });
    });

module.exports = router;
