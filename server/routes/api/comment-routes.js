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
router.route("/:userId").put(createComment);

// /api/comments/commentID
router.route("/:commentId").post(updateComment).delete(deleteComment)

module.exports = router;
