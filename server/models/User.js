const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;
const Idea = require("./Idea.js");
const Comment = require("./Comment.js");

const userSchema = new Schema({
  provider_id: String,
  provider_name: String,
  username: String,
  picPath: String,
  description: String,
  ideas: [{ type: Schema.Types.ObjectId, ref: 'Idea' }],
  password: String, 
  following: [{ type: Schema.Types.ObjectId, ref: 'Idea' }],
  comments : [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  messages: []
});


module.exports = mongoose.model('User', userSchema);
