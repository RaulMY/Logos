const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const commentSchema = new Schema({
  authorId: { type: Schema.Types.ObjectId, ref: 'User' },
  ideaId: String,
  content: String,
  type: String,
  link: String,
  rating: [],
}, {
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});


module.exports = mongoose.model('Comment', commentSchema);
