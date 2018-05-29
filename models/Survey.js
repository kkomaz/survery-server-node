const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema] // Array containing a list of string,
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 }
});

mongoose.model('surveys', surveySchema);
