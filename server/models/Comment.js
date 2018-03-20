const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const commentSchema = new Schema({
  authorId: String,
  ideaId: String,
  content: String,
  type: String,
  link: String,
  rating: Number
}, {
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});


module.exports = mongoose.model('Comment', commentSchema);
