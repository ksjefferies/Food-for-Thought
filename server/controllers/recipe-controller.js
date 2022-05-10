const { User, Recipe } = require('../models');
require("dotenv").config()

const getAllRecipes = async (req, res) => {
    const recipeData = await Recipe.findAll()
}