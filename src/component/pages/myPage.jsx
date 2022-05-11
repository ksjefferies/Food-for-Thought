import React from "react";
import PageContainer from "../pageContainer/PageContainer";
import { Stack, Text, useColorModeValue } from '@chakra-ui/react';
import CommentSection from "../comments/comments";

export function MyPage(props) {
    return (
        <PageContainer>
            <Stack
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