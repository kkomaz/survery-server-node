const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

module.exports = app => {
  // User logged in and credits
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {

  });
};
