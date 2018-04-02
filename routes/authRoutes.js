const passport = require('passport');

module.exports = (app) => {
  // googleStrategy has an internal identifier as 'google'
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  // Returned callback route post user approval
  app.get('/auth/google/callback', passport.authenticate('google'));
};
