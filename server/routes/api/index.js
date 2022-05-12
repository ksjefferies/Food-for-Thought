const router = require('express').Router();
const userRoutes = require('./user-routes');
const commentRoutes = require("./comment-routes");
const recipeRoutes = require("./recipe-routes");

router.use('/user', userRoutes);
router.use("/comment", commentRoutes);
// router.use("/recipe", recipeRoutes);

module.exports = router;