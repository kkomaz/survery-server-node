const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express(); // single app.

// new instance of GoogleStrategy
// passport.use (above)
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback' // route user will be sent to after granting permission
}, (accessToken, refreshToken, profile, done) => {
  console.log({ accessToken, refreshToken, profile });
}));

// googleStrategy has an internal identifier as 'google'
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Returned callback route post user approval
app.get('/auth/google/callback', passport.authenticate('google'));

/**
 * Heroku Configs
 * Look at underlying environment and see what PORT is defined.
 * environment variable OR use 5000
*/

const PORT = process.env.PORT || 5000;
app.listen((PORT), () => {
  console.log('listening on port ' + PORT);
});
