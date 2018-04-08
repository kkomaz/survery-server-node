const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// GET the userSchema via users class
const User = mongoose.model('users');

// Serialize the user
// user argument is coming from .save returned promise
passport.serializeUser((user, done) => {
  done(null, user.id)
});

// Deserialize user
// id is coming from the done of serializeUser
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    });
});

// new instance of GoogleStrategy
// passport.use (above)
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback' // route user will be sent to after granting permission
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id })
    .then((existingUser) => {
      if (existingUser) {
        done(null, existingUser); // (error, existingUser)
      } else {
        new User({ googleId: profile.id }) // Make a new record instance - async
          .save() // save
          .then((user) => done(null, user));
      }
    });
}));
