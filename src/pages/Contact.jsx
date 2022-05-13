import React from 'react';
import PageContainer from '../component/pageContainer/PageContainer';
import  backgroundImage  from '../assets/images/contact-image.jpeg';
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
    Image,
} from '@chakra-ui/react';

export function Contact() {
    return (
        <PageContainer  >

            <Flex
                bg={useColorModeValue('gray.100', 'gray.900')}
                align="center"
                justify={
                    {
                        base: 'center',
                        md: 'space-around',
                        xl: 'space-between'
                    }
                }
                id="contact">
                    
                <Box
                    borderRadius="lg"
                    m={{ base: 5, md: 16, lg: 10 }}
                    p={{ base: 5, lg: 16 }}>
                    <Box>

                        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                            <Heading
                                fontSize={{
                                    base: '4xl',
                                    md: '5xl',
                                }}>
                                Get in Touch
                            </Heading>

                            <Image
                                src={backgroundImage}
                                size= "100%"
                            />
                            <Box
                            
                                bg={useColorModeValue('white', 'gray.700')}
                                borderRadius="lg"
                                p={8}
                                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                                shadow="base">
                                <VStack spacing={5}>
                                    <FormControl isRequired>
                                        <FormLabel>Name</FormLabel>

                                        <InputGroup>
                                            <Input type="text" name="name" placeholder="Your Name" />
                                        </InputGroup>

                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>

                                        <InputGroup>
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                            />
                                        </InputGroup>

                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Message</FormLabel>

                                        <Textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows={6}
                                            resize="none"
                                        />
                                    </FormControl>

                                    <Button
                                        colorScheme="blue"
                                        bg="blue.400"
                                        color="white"
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                        isFullWidth>
                                        Send Message
                                    </Button>
                                </VStack>
                            </Box>

                        </VStack>
                    </Box>
                </Box>
            </Flex>
        </PageContainer>
    );
}