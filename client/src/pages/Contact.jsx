import React from 'react';
import PageContainer from '../component/pageContainer/PageContainer';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    Textarea,
    useColorModeValue,
    VStack,
    Image
} from '@chakra-ui/react';
import image from '../assets/images/image.jpeg'

export function Contact() {
    return (
        <PageContainer>

            <Flex
                flex={1}
                align='center'
                justify='center'
                id='contact'
                wrap='no-wrap'
                margin={10}>

                <Box
                    borderRadius='lg'>
                    <Flex gap={10} direction={{ base: 'column-reverse', md: 'row' }}>
                        <Image src={image} />
                        <VStack spacing={{ base: 4, }}>
                            <Heading
                                fontSize={{
                                    base: '4xl',
                                    md: '5xl',
                                }}>
                                Questions?
                            </Heading>

                            <Box
                                bg={useColorModeValue('white', 'gray.700')}
                                borderRadius='lg'
                                p={8}
                                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                                shadow='base'>
                                <VStack spacing={5}>
                                    <FormControl isRequired>
                                        <FormLabel>Name</FormLabel>

                                        <InputGroup>
                                            <Input
                                                type='text'
                                                name='name'
                                                placeholder='Your Name' />
                                        </InputGroup>

                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>

                                        <InputGroup>
                                            <Input
                                                type='email'
                                                name='email'
                                                placeholder='Your Email'
                                            />
                                        </InputGroup>

                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Message</FormLabel>

                                        <Textarea
                                            name='message'
                                            placeholder='Your Message'
                                            rows={6}
                                            resize='none'
                                        />
                                    </FormControl>
                                    <Button
                                        colorScheme='blue'
                                        bg='blue.400'
                                        color='white'
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                        isFullWidth>
                                        Send Message
                                    </Button>
                                </VStack>
                            </Box>
                        </VStack>
                    </Flex>
                </Box>
            </Flex>
        </PageContainer>
    );
}