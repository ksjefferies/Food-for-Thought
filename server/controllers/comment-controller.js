// createComment, getComments (find by Id), updateComment, deleteComment
const { Comment } = require('../models/Comment');

module.exports = {

    //create a comment
    async createComment({ body }, res) {

        try {
            const newComment = await Comment.create(body)
            console.log(body)

            if (!newComment) {
                return res.status(400).json({ message: 'Something went wrong!' });
            }

            res.json(newComment);

        } catch (err) {
            console.log(err)
            return res.status(400).json(err);
        }
    },

    // get all comments
    async getComments(req, res) {

        try {
            const allComments = await Resource.findAll()

            if (!allComments) {
                return res.status(400).json({ message: "Couldn't get Comments" });
            }

            res.json(allComments)

        } catch (err) {
            return res.status(500).json(err);
        }
    },

    //get comment by id
    async getCommentById({ params }, res) {
        try {
            const singleComment = await Comment.findOne({ _id: params.CommentId })

            if (!singleComment) {
                return res.status(400).json({ message: 'No Comment with that ID!' });
            }

            res.json(singleComment)

        } catch (err) {
            res.status(500).json(err)
        }
    },

    //edit comment 
    async updateComment({ body, params }, res) {
        try {
            const updatedComment = await Comment.findOneAndUpdate(
                { _id: params.CommentId },
            )

            if (!updatedComment) {
                return res.status(400).json({ message: "Can't find a comment with that ID!" });
            }

            res.json(updatedComment)

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //delete comment 
    async deleteComment({ params }, res) {
        try {
            const deletedComment = await Comment.findOneAndDelete({ _id: params.CommentId })

            if (!deletedComment) {
                return res.status(400).json({ message: "Can't find a comment with that ID!" });
            }

            res.json({ message: 'Comment successfully deleted!' })

        } catch (err) {
            return res.status(500).json(err)
        }
    },
};