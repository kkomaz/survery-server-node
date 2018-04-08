const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

const app = express(); // single app.

require('./routes/authRoutes')(app);

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
