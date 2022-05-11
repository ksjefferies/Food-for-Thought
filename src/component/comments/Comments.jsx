
import React from 'react';
import {
    Textarea,
    Container,
    Button,
    VStack,
    StackDivider,
    Box,
    Text

} from '@chakra-ui/react'

/*
Need two seperate areas. One where you can see all the comments that are populated by the recipe and one where you can write and post a new comment. Let's work on the design first and functionality later.
*/

export default function CommentSection(props) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        // <Text>{props.test}</Text>
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
        >
            <Box h='40px' bg='yellow.200'>
                1
            </Box>

            <Box h='40px' bg='tomato'>
                2
            </Box>

            <Box h='40px' bg='pink.100'>
                3
            </Box>

            <Container alignContent="center">

                <Textarea placeholder='Write Your Comment Here' />
                <Button type='submit' size="sm" onClick={handleSubmit} >Submit</Button>

            </Container>
        </VStack>
    )
}