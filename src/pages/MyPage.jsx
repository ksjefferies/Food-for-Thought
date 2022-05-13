import React from "react";
import PageContainer from "../component/pageContainer/PageContainer";
import { Stack, Text, useColorModeValue } from '@chakra-ui/react';
import CommentSection from "../component/comments/Comments";

export function MyPage(props) {
    return (
        <PageContainer>
            <Stack
            minH={'100%'}
                bg={useColorModeValue('gray.50', 'gray.800')}
                py={16}
                px={8}
                spacing={{ base: 8, md: 10 }}
                align={'center'}
                direction={'column'}>
                <Text
                    fontSize={{ base: 'xl', md: '2xl' }}
                    textAlign={'center'}
                    maxW={'3xl'}>
                    THIS PAGE IS FOR A USER PROFILE PAGE
                </Text>
                <CommentSection test="some string"></CommentSection>
            </Stack>
        </PageContainer>
    )
}