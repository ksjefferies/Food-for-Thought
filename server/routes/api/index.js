const router = require('express').Router();
const userRoutes = require('./user-routes');
const commentRoutes = require("./comment-routes");

router.use('/user', userRoutes);
router.use("/comment", commentRoutes);

module.exports = router;