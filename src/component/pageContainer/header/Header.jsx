import { NavLink } from './NavLink';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router';
import SearchBar from "./SearchBar";
import { useUser } from '../../../utils/UserContext'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack
} from '@chakra-ui/react';

const Links = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: "/about"
    },
    {
        text: 'My Favorites',
        href: '/mypage'
    },
    {
        text: 'Profile',
        href: '/profile'
    }
];

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const authUser = useUser()
    console.log(!!authUser.user)
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Box>Logo</Box>

                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <NavLink href={link.href} key={link.text}>{link.text}</NavLink>
                        ))}
                    </HStack>

                </HStack>
                <Flex alignItems={'center'}>
                    <HStack
                        spacing={4}
                        flex={1}
                        minW="md">
                        <SearchBar />
                        {
                            !authUser.user
                                ? <Button onClick={() => navigate('../login')}
                                    variant={'solid'}
                                    colorScheme={'blue'}
                                    size={'sm'}
                                    mr={4}>
                                    Sign in
                                </Button>

                                : (<Menu>
                                    <MenuButton
                                        as={Button}
                                        rounded={'full'}
                                        variant={'link'}
                                        cursor={'pointer'}
                                        minW={0}>
                                        <Avatar
                                            size={'sm'}
                                            src={
                                                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                            }
                                        />
                                    </MenuButton>

                                    <MenuList>
                                        <MenuItem>Account Settings</MenuItem>
                                        <MenuItem onClick={() => navigate('../mypage')}>Favorites</MenuItem>
                                        <MenuDivider />
                                        <MenuItem onClick={() => {
                                            authUser.logoutUser()
                                            navigate('../')
                                        }}>Logout</MenuItem>
                                    </MenuList>
                                </Menu>)}

                    </HStack>
                </Flex>
            </Flex>
        </Box>
    );
}