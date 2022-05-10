const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  category: {
    type: String,
  },

  ingredients: {
    type: String,
  },

  image: {
    type: String,
  },

  userID:[
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
 ]

});

const Recipe = model('Recipe', recipeSchema);
module.exports = Recipe;
