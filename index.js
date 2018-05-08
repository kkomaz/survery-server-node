const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const app = express(); // single app.

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000, // How long can cookie exist before expiration (ms)
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  /**
   * Express will serve up production assets.  Like our main.js file, or main.css file!
   * If a route handler is not set up, look into client/build and see if matches up with whatever the request is asking for.
  */
  app.use(express.static('client/build'));

  /**
   * Express will serve up the index.html file if it doesn't recognize the route
   * Serve the HTML document.  Absolute catch-all.
  */
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

mongoose.connect(keys.mongoURI);

/**
 * Heroku Configs
 * Look at underlying environment and see what PORT is defined.
 * environment variable OR use 5000
*/
const PORT = process.env.PORT || 5000;
app.listen((PORT), () => {
  console.log('listening on port ' + PORT);
});
