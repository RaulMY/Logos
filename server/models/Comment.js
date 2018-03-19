const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const commentSchema = new Schema({
  authorId: String,
  commentId: String,
  content: String,
  type: String,
  rating: Number
}, {
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});


module.exports = mongoose.model('Comment', commentSchema);
