import PageContainer from "../component/pageContainer/PageContainer";
import cookie from "js-cookie"
import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const LoginPage = (props) => {

  // const handleInputChange = (e) => {
  // ({...formData, [e.target.name]: e.target.value})
  // }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const query = await fetch("/api/user/auth",
      {
        method: "post",
        body: JSON.stringify(
          {
            email: email,
            password: password,
          }),
        headers: { "Content-Type": "application/json" }
      })

    const result = await query.json()

    if (result && !result.err && result.data && result.data.token) {
      cookie.set("auth-token", result.data.token, { expires: 3 })
    }
    window.location.replace('/')
  }

  return (
    <PageContainer>
      <Flex
        minH={'100%'}
        w={'100%'}
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
              fontSize={'4xl'}>
              Sign in to your account
            </Heading>

            <Text
              fontSize={'lg'}
              color={'gray.600'}>
              and start eating the way you want ✌️
            </Text>
          </Stack>

          <form onSubmit={handleFormSubmit}>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>

              <Stack spacing={4}>
                <FormControl id="email" isRequired>
                  <FormLabel>
                    Email address
                  </FormLabel>

                  <Input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                  />
                </FormControl>

                <FormControl id="password" isRequired>
                  <FormLabel>
                    Password
                  </FormLabel>

                  <Input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                </FormControl>

                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  >
                    <Checkbox>
                      Remember me
                    </Checkbox>

                    <Link
                      onClick={() => navigate('../Contact')}
                      color={'blue.400'}>Forgot password? Contact us here!
                    </Link>


                  </Stack>

                  <Button
                    type='submit'
                    onClick={handleFormSubmit}
                    bg={'#3B38B9'}
                    color={'white'}
                    _hover={
                      {
                        bg: 'blue.500',
                      }}>
                    Sign in
                  </Button>


                  <Stack pt={0}>
                    <Text align={'center'}>
                      Need to make an account? <Link onClick={() => navigate('../signup')} color={'blue.400'}>Click here!</Link>
                    </Text>
                  </Stack>

                </Stack>
              </Stack>
            </Box>
          </form>
        </Stack>
      </Flex>
    </PageContainer>
  )
}

export default LoginPage