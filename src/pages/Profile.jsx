import PageContainer from "../component/pageContainer/PageContainer";
import { Box, Stack, Text, Container } from '@chakra-ui/react';
import { useQuery } from 'react-query'
import { useUser } from "../utils/UserContext";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { SimpleGrid } from "@chakra-ui/react";
import {
    Image,
    ListItem,
    UnorderedList,
    Heading,
    Avatar,
  Center,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

export function Profile() {
    const authUser = useUser()
    const getUser = async () =>{
        const userID = authUser.user._id
        const query = await fetch(`/api/user/${userID}`)
        return query.json()
    }

    const userInfo = useQuery({
        queryKey: ["UserData", authUser.user],
        queryFn: getUser,
        enabled: !!authUser.user
    })

    console.log(userInfo)


    return (
        <PageContainer>
            <Stack
                minH={'100%'}
                minW={'100%'}
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
                            maxW={{ base: '100%', md: '50%' }}
                            minW={'250px'}
                            p={'4'}
                            bg={'gray'}
                            color={'white'}
                            maxH={'100%'}
                            minH={'20%'}
                            borderRadius={'lg'}
                            display={'flex'}
                            justifyContent={'center'}>
                            

                            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                            <Text textAlign={'center'} fontSize={'3xl'}>{userInfo?.data?.username}</Text>

                                <Box display={'inline-flex'} 
                                    maxW={{ base: '100%', md: '75%' }}>
                                    <Image
                                        size={'100px'}
                                        src={'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}
                                        alt={'placeholder avatar'}
                                        mb={1}
                                    />
                                </Box>

                                <UnorderedList w={'100%'}>
                                    <ListItem>First Name: {userInfo?.data?.first}</ListItem>
                                    <ListItem>Cooking Experience: {userInfo?.data?.skillLevel}</ListItem>
                                    <ListItem>Bio: {userInfo?.data?.description}</ListItem>
                                </UnorderedList>
                            </SimpleGrid>
                        </Box>
                    </Container>
                </Container>
           
                <Center py={6}>
                    <Box
                        maxW={'320px'}
                        w={'full'}
                        bg={'#ececfb'}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        p={6}
                        textAlign={'center'}>
                        <Avatar
                            size={'2xl'}
                            src={
                                'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                            }
                            alt={'Avatar Alt'}
                            mb={4}

                        />
                        <Heading fontSize={'3xl'} fontFamily={'body'}>
                            {userInfo?.data?.username}
                        </Heading>
                        <Text fontSize={'xl'} fontWeight={600} color={'gray.500'} mb={4}>
                            {userInfo?.data?.first} {userInfo?.data?.last}
                        </Text>
                        <Text
                            textAlign={'center'}
                            color={'#334242'}
                            px={3}>
                            Cooking Experience: {userInfo?.data?.skillLevel}
                        </Text>
                        <Text
                            textAlign={'center'}
                            color={'#334242'}
                            px={3}>
                           Bio: {userInfo?.data?.description}
                        </Text>

                    </Box>
                </Center>
            </Stack>
        </PageContainer>
    )
}