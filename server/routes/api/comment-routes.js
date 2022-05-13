const router = require('express').Router();
const {
    createComment,
    getComments,
    updateComment,
    deleteComment
} = require('../../controllers/comment-controller')

// /api/comments
router.route("/").get(getComments);

// /api/comments/:userID
router.route("/:_id").post(createComment);

// /api/comments/commentID
router.route("/:_id").put(updateComment).delete(deleteComment)

module.exports = router;