const { Schema, model } = require('mongoose');

const commentSchema = new Schema({

  comment: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => moment(createdAtVal).format('MMMM D, YYYY [at] hh:mm a')
  },

  userID:[
       {
           type: Schema.Types.ObjectId,
           ref: 'User'
       }
    ],

   recipeID:[  
    {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
    }
    ],

});

const Comment = model('Comment', commentSchema);
module.exports = Comment;
