const { User, Recipe } = require('../models');
require("dotenv").config()

/* 
    getManyRecipes,
    getOneRecipe,
    getRecipeBySearch,
    getUserSavedRecipes
*/

const getAllRecipes = async (req, res) => {
    const recipeData = await Recipe.findAll()
}