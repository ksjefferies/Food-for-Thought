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
    Link,
} from '@chakra-ui/react';

const Links = [

];

const AuthLinks = [

    {
        text: 'My Favorites',
        href: '/mypage'
    },
    {
        text: 'Profile',
        href: '/profile'
    }
]

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const authUser = useUser()

    return (
        <Box sx={{ position: 'fixed' }} width={'100%'} h={"55"} zIndex={'5'}
            bg={useColorModeValue('black', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Menu isLazy>
                    <MenuButton
                        as={IconButton}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}>
                    </MenuButton>
                    <MenuList>
                        {!authUser.user
                            ? Links.map((link) => (
                                <MenuItem key={link.text}>
                                    <Link href={link.href}>

                                        {link.text}
                                    </Link>
                                </MenuItem>
                            ))
                            : [...Links, ...AuthLinks, , { text: 'Search', href: "/recipe" },].map((link) => (
                                <MenuItem key={link.text}>
                                    <Link href={link.href}>

                                        {link.text}
                                    </Link>
                                </MenuItem>
                            ))
                        }
                    </MenuList>
                </Menu>

                <HStack spacing={8} alignItems={'center'} textColor={'white'}>
                    <Box>
                        <Link href='/'>
                            Logo
                        </Link>

                    </Box>

                    <HStack
                        textColor={'white'}
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        {!authUser.user
                            ? Links.map((link) => (
                                <NavLink href={link.href} key={link.text}>{link.text}</NavLink>
                            ))
                            : [...Links, ...AuthLinks].map((link) => (
                                <NavLink href={link.href} key={link.text}>{link.text}</NavLink>
                            ))
                        }
                    </HStack>

                </HStack>
                <Flex alignItems={'center'}>
                    <HStack
                        spacing={4}
                        flex={1}
                    >
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