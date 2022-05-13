const router = require('express').Router();
const {
    createComment,
    getComments,
    updateComment,
    deleteComment,
    getCommentByRecipeId

} = require('../../controllers/comment-controller')

// /api/comments
router.route("/").get(getComments);

// /api/comments/:userID
router.route("/:_id").post(createComment);

// /api/comments/commentID
router.route("/:_id").put(updateComment).delete(deleteComment)

// api/comments/recipeID
router.route("/recipe/:_id").get(getCommentByRecipeId)

module.exports = router;