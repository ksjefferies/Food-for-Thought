const { Schema, model } = require('mongoose');

const commentSchema = new Schema({

  comment: {
    type: String,
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

const User = model('Comment', userSchema);
module.exports = User;
