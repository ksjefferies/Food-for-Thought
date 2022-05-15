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
  Textarea,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
} from '@chakra-ui/react';

const SignupPage = (props) => {
  
  const handleChange = (e) => {
    setFormProps(prev => ({
        ...prev,
        [e.target.id]: e.target.value
    }))
}
  const [ formProps, setFormProps ] = useState({})
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const query = await fetch("/api/user",
      {
        method: "post",
        body: JSON.stringify(formProps),
        headers: { "Content-Type": "application/json" }
      })


    const result = await query.json()

    if (result && !result.err && result.data && result.data.token) {
      cookie.set("auth-token", result.data.token, { expires: 3 })
    }
    window.location.replace("/login")

  
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
                    <FormControl >
                      <FormLabel>First Name</FormLabel>
                      <Input 
                      id="first"
                      type="text"
                      onChange={handleChange}
                      value={formProps?.first || ""} />
                    </FormControl>
                  </Box>

                  <Box>
                    <FormControl >
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text"
                      onChange={handleChange}
                      value={formProps?.last || ""} 
                      id="last"/>
                    </FormControl>
                  </Box>
                </HStack>

                <FormControl>
                  <FormLabel>Tell us about yourself</FormLabel>
                  <Textarea
                   id="description"
                    value={formProps?.description || ""}
                    onChange={handleChange}
                    type="text"
                  />
                </FormControl>
                
                <FormControl>
                  <Select placeholder='Skill Level' 
                  onChange={handleChange}
                  id="skillLevel">
                    <option>Beginner</option>
                    <option>HomeMaker</option>
                    <option>Gordon Ramsay</option>
                  </Select>
                </FormControl>

                <FormControl  isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                  id="username"
                    value={formProps?.username || ""}
                    onChange={handleChange}
                    type="username"
                  />
                </FormControl>

                <FormControl  isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                  id="email"
                    value={formProps?.email || ""}
                    onChange={handleChange}
                    type="email"
                  />
                </FormControl>

                <FormControl  isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input 
                    id="password"
                      value={formProps?.password || ""} 
                      onChange={handleChange}
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
