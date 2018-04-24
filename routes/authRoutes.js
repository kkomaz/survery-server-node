const passport = require('passport');

module.exports = (app) => {
  // googleStrategy has an internal identifier as 'google'
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  // Returned callback route post user approval
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout(); // kills the cookie via passport
    res.redirect('/');
  });

  // Test to make sure o-auth and login flow works.
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
