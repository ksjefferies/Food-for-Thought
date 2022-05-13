const { Schema, model } = require('mongoose');

const commentSchema = new Schema({

  commentBody: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => moment(createdAtVal).format('MMMM D, YYYY [at] hh:mm a')
  },
  userID: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  recipeID: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    }
  ]
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;