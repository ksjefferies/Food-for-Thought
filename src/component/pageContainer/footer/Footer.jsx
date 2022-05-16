import {
    Box,
    Container,
    Link,
    Flex,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('black')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Flex
                h={1}
                alignItems={'center'}
                justifyContent={'center'}></Flex>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <Stack
                    direction={'row'}
                    spacing={6}
                    textColor={'white'}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/about'}>About</Link>
                    <Link href={'/contact'} >Contact</Link>
                </Stack>
            </Container>
        </Box>
    );
}