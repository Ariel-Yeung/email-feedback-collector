const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys')

const User = mongoose.model('users');

// create token used to make cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then( (user) => {
            done(null, user);
        });
});


passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID, 
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true                                          // trust any proxy make sure it is https not http
        }, (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleID: profile.id})
                .then( (existingUser) => {
                    if (existingUser) {
                        // user already exists in database
                        done(null, existingUser);
                    } else {
                        new User({ googleID: profile.id})
                        .save()
                        .then(user => done(null, user));
                    }
                });
    })
);