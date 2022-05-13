import PageContainer from "../component/pageContainer/PageContainer";
import cookie from "js-cookie"
import { useNavigate } from "react-router";
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

const SignupPage = (props) => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const query = await fetch("/api/user/auth",
      {
        method: "post",
        body: JSON.stringify(
          {
            username: username,
            email: email,
            password: password,
          }),
        headers: { "Content-Type": "application/json" }
      })

    const result = await query.json()

    if (result && !result.err && result.data && result.data.token) {
      cookie.set("auth-token", result.data.token, { expires: 3 })
    }
  }

  return (
    <PageContainer>
      <Flex
        minH={'100%'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>

        <Stack
          spacing={8}
          mx={'auto'}
          maxW={'lg'}
          py={12}
          px={6}>

          <Stack align={'center'}>
            <Heading
              fontSize={'4xl'}
              textAlign={'center'}>
              Sign up
            </Heading>

            <Text
              fontSize={'lg'}
              color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>

          <form onSubmit={handleFormSubmit}>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>

              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName">
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>

                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </HStack>

                <FormControl id="username" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    type="username"
                  />
                </FormControl>

                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                  />
                </FormControl>

                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input 
                      value={password} 
                      onChange={e => setPassword(e.target.value)} 
                      type={showPassword ? 'text' : 'password'} 
                      />
                    <InputRightElement h={'full'}>

                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>

                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    onClick={handleFormSubmit}
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    Sign up
                  </Button>
                </Stack>

                <Stack pt={6}>
                  <Text align={'center'}>
                    Already a user? <Link onClick={() => navigate('../login')} color={'blue.400'}>Login</Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </form>

        </Stack>
      </Flex>
    </PageContainer>
  );
}

export default SignupPage
