const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// New Collection/model called users
// Loads a schema into mongoose
mongoose.model('users', userSchema);
