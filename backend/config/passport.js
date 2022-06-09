const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
require('mongoose-findorcreate')
const passport = require('passport')
const Users = require('../models/Users')

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    Users.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
        clientID: '916124081970-l6f7l023b6jo8rc8qojqhlu2jc0p0eju.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: '/auth/google/callback',
        scope: ['profile'],
        proxy: true,
        state: true
    },
    (accessToken, refreshToken, profile, cb) => {
        Users.findOrCreate({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            profilePicture: profile.photos[0].value
        }, function (err, user) {
            return cb(err, user);
        });
    }
));

passport.use(new FacebookStrategy({
        clientID: "2602421249888686",
        clientSecret: "d4c89af89b9aa8e23ff143979d31aee2",
        callbackURL: "/auth/facebook/callback",
        proxy: true,
        passReqToCallback: false,
        profileFields: ['displayName', 'emails']

    },
    (accessToken, refreshToken, profile, cb) => {
        Users.findOrCreate({name:profile.displayName, email:profile._json.email, facebookId: profile.id }, (err, user) => {
            return cb(err, user);
        });
    }
));