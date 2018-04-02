const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

// new instance of GoogleStrategy
// passport.use (above)
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback' // route user will be sent to after granting permission
}, (accessToken, refreshToken, profile, done) => {
  console.log({ accessToken, refreshToken, profile });
}));
