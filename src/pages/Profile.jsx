import PageContainer from "../component/pageContainer/PageContainer";
import { Box, Stack, Text, Container } from '@chakra-ui/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { SimpleGrid } from "@chakra-ui/react";
import {
    Image,
    // Flex,
    // Heading,
    ListItem,
    UnorderedList,
    // HStack
} from '@chakra-ui/react';

export function Profile() {
    return (
        <PageContainer>
            <Stack
                minH={'100%'}
                justify={'center'}
                bg={'#F1F3F0'}
                py={16}
                px={8}
                spacing={{ base: 8, md: 10 }}
                align={'center'}
                direction={'column'}>

                <Text
                    fontSize={{ base: 'xl', md: '2xl' }}
                    textAlign={'center'}
                    maxW={'3xl'}>
                    My Profile
                </Text>

                <Container
                    display={'inline-flex'}
                    maxW={{ base: '100%', md: '50%' }}>

                    <Container
                        maxW={'100%'}
                        minW={'100%'}>

                        <Box
                            maxW={'100%'}
                            minW={'250px'}
                            p={'4'}
                            bg={'gray'}
                            color={'white'}
                            maxH={'100%'}
                            minH={'20%'}>

                            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>

                                <Box display={'inline-flex'}
                                    maxW={{ base: '100%', md: '50%' }}>
                                    <Image
                                        size={'100px'}
                                        src={'https://avatars.githubusercontent.com/u/97249322?v=4'}
                                        alt={'Kelly Jefferies'}
                                        mb={1}
                                    />
                                </Box>

                                <UnorderedList w={'100%'}>
                                    <ListItem>First Name:</ListItem>
                                    <ListItem>State:</ListItem>
                                    <ListItem>Recipe Specialty:</ListItem>
                                    <ListItem>Cooking Experience:</ListItem>
                                    <ListItem>Bio:
                                        <a> I'm a Full Stack developer with 10 years experience in IT Support Management. I recently transitioned into the web development world after earning a certificate in Full Stack Web Development (MERN) from Southern Methodist University.</a>
                                    </ListItem>
                                </UnorderedList>
                            </SimpleGrid>
                        </Box>
                    </Container>
                </Container>
            </Stack>
        </PageContainer>
    )
}