import {useState} from 'react'
import Popup from './Popup'
import {
    Box,
    Container,
    Link,
    Flex,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
                <Flex h={1} alignItems={'center'} justifyContent={'center'}></Flex>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <Stack direction={'row'} spacing={6}>
                    <Link href={'/'}>Home</Link>
                    {/* <Link href={'/about'}>About</Link>
                    <Link href={'/mypage'}>My Page</Link> */}
                    <Link onClick={togglePopup} >Contact</Link>
                </Stack>
            </Container>
        </Box>
    );
}