import Auth from '../../utils/UserContext'
import createComment from './PushComment'
// import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import {
    Input,
    VStack,
    Box,
    Container,
    StackDivider,
    Button
} from '@chakra-ui/react'

function RenderComments(props) {

    const [commentData, setCommentData] = useState({
        comment: '',
        username: ''
    })

    const isLoggedIn = Auth.loggedIn()

    // const { commentPop } = () => useQuery(["comment"], fetchAllComments)

    useEffect(() => {
        const getUsername = async () => {
            if (!isLoggedIn) {
                return false;
            }
            const result = await Auth.verifyUser();
            if (!result) {
                throw new Error('Oh no! Something went wrong.');
            }
        }
        getUsername()
    }, []
    )

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCommentData({ ...commentData, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const newComment = await createComment(commentData, id)

        if (!newComment) {
            throw new Error("Oh no! Something went wrong")
        }
        console.log("Comment created!")

        setCommentData({ ...commentData, 'comment': '' })

    }

    return (
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
            onLoad={renderComments}
        >           
            <h3>Comments</h3>
           
            {props.comments?.map(item => {
                <Box bg='blue' w='75%' p={4} color='black'>
                    <p>{item.comment}</p>
                    <p>{item.username}</p>
                    <p>{item.createdAt}</p>
                </Box>
            
            })}


            {isLoggedIn ? (
                <>
                    <Container alignContent='center'>
                        <Input name="comment" type="text" placeholder='Add your comment here!' value={commentData.comment} onChange={handleInputChange} />
                        <Button type='submit' size='sm' onClick={handleSubmit}>Submit</Button>
                    </Container>
                </>
            ) : (
                <p><a href='/login'>Login</a> to add a comment!</p>
            )}


        </VStack>
    )

}

export default RenderComments