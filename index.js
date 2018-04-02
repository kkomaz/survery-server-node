const express = require('express');
require('./services/passport');
const app = express(); // single app.

require('./routes/authRoutes')(app);

/**
 * Heroku Configs
 * Look at underlying environment and see what PORT is defined.
 * environment variable OR use 5000
*/
const PORT = process.env.PORT || 5000;
app.listen((PORT), () => {
  console.log('listening on port ' + PORT);
});
