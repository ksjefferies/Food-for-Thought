
// import {
//     Textarea,
//     Container,
//     Button,
//     VStack,
//     StackDivider,
//     Box,
// } from '@chakra-ui/react'

// /*
// Need two seperate areas. One where you can see all the comments that are populated by the recipe and one where you can write and post a new comment. Let's work on the design first and functionality later.
// */

// export default function CommentSection(props) {
//     function handleSubmit(e) {
//         e.preventDefault();
//     }

//     return (
//         <VStack
//             divider={<StackDivider borderColor='gray.200' />}
//             spacing={4}
//             align='stretch'
//         >
//             <Box h='40px' bg='yellow.200'>
//                 1
//             </Box>
//             <Container alignContent="center">

//                 <Textarea placeholder='Write Your Comment Here' />
//                 <Button type='submit' size="sm" onClick={handleSubmit} >Submit</Button>

//             </Container>
//         </VStack>
//     )
// }

import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import CommentSection from "./CommentSection";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../api";

const Comments = ({ commentsUrl, currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
