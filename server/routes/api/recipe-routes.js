const router = require('express').Router();
const { 
    getManyRecipes,
    getOneRecipe,
    getRecipeBySearch,
    getUserSavedRecipes
} = require("../../controllers/recipe-controller");

// /api/recipes
router.route("/").get(getManyRecipes).get(getOneRecipe).get(getRecipeBySearch);

// /api/recipes/:user
router.route("/:userId").get(getUserSavedRecipes);