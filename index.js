const express = require('express');
const app = express(); // single app.

app.get('/', (req, res) => {
  res.send('Hello World');
});

/**
 * Heroku Configs
 * Look at underlying environment and see what PORT is defined.
 * environment variable OR use 5000
*/

const PORT = process.env.PORT || 5000;
app.listen(PORT);
