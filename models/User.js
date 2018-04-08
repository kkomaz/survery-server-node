const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// New Collection/model called users
mongoose.model('users', userSchema);
