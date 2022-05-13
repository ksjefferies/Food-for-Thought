import PageContainer from "../component/pageContainer/PageContainer";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { recipeByID } from "../utils/recipeHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  ListItem,
  UnorderedList,
  HStack,
  VStack,
  Button,
  Textarea
} from '@chakra-ui/react';

export function RecipeIdv() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["recipePage", id],
    queryFn: recipeByID,
    ...{ enabled: !!id }
  })

  // Code for comments
  const [commentData, setCommentData] = useState({
    commentBody: ''
  })

  function fetchComments (){
    useQuery('Comments', Comment)
    
    return (
        <PageContainer>

            <Container maxW={'7xl'} bg={'#E2F0FF'}>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={{ base: 8, md: 10 }}
                    py={'7'}
                    my={{ base: 15, md: 20 }}>


                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'product image'}
                            src={data?.image}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={{ base: '100%', sm: '400px', lg: '500px' }}
                        />
                    </Flex>
                    <Stack spacing={{ base: 6, md: 2 }}>
                        <HStack
                            as={'header'}
                            justify={'space-between'}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                {data?.title}
                            </Heading>
                            <FontAwesomeIcon
                                icon={isFavorite ? faStar : regularStar}
                                size="3x"
                                color="#3275a8"
                                onClick={() => {
                                    setIsFavorite(!isFavorite)
                                }}
                            />
                        </HStack>

                        <Text
                            fontSize={{ base: '13px', lg: '15px' }}
                            fontWeight={'500'}
                            textTransform={'uppercase'}>

                            {`Yield: ${data?.yields}`}
                        </Text>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={'column'}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                                />
                            }>

                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color={useColorModeValue('yellow.500', 'yellow.300')}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Ingredients
                                </Text>

                                <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                                    <UnorderedList w={'100%'}>
                                        {data?.ingredients.map(item => (
                                            <ListItem>{item}</ListItem>
                                        ))}
                                    </UnorderedList>
                                </SimpleGrid>
                            </Box>
                        </Stack>
                    </Stack>

                </SimpleGrid>
                <Stack
                    spacing={{ base: 1, sm: 6 }}
                    mb={'20'}
                    direction={'row'}
                    divider={
                        <StackDivider
                            borderColor={useColorModeValue('gray.200', 'gray.600')}
                        />
                    }>
                    <Box>
                        <Text
                            fontSize={{ base: '16px', lg: '25px' }}
                            color={useColorModeValue('yellow.500', 'yellow.300')}
                            fontWeight={'500'}
                            textDecoration={'underline'}
                            textTransform={'uppercase'}
                            mb={'3'}
                            pt={{ base: 15, md: 1 }}>
                            Directions
                        </Text>

                        {data?.instructions.split("\n").map(line => (

                            <Text fontSize={{ base: 'xl', md: '2xl' }}
                                textAlign={'left'}
                                maxW={'6xl'}
                                mb={'5'}>
                                {line}
                            </Text>
                        ))}

                    </Box>
                </Stack>
            </Container>
        </PageContainer>
    )
  }

  const targetComment = (e) => {
    const { value } = e.target;
    setCommentData({ ...value })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Comment Submitted")
    console.log("Comment added!")
    setCommentData({ ...commentData, "comment": '' })
  }

  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <PageContainer>

      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={data?.recipe?.image}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <HStack
              as={'header'}
              justify={'space-between'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {data?.recipe?.label}
              </Heading>

              <FontAwesomeIcon
                icon={isFavorite ? faStar : regularStar}
                size="3x"
                color="#3275a8"
                onClick={() => {
                  setIsFavorite(!isFavorite)
                }}

              />
            </HStack>


            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>

              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Ingredients
                </Text>

                <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                  <UnorderedList w={'100%'}>
                    {data?.recipe?.ingredientLines.map(item => (
                      <ListItem>{item}</ListItem>
                    ))}
                  </UnorderedList>
                </SimpleGrid>
              </Box>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      {/* Comments Structure*/}
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
      >
        <div onLoad={fetchComments}>
          {/* {this.comment?.map(item => {
						return (
							<Box h='40px' margin="1rem" bg='yellow.200' key={item.commentId}>
								<p>{item.commentBody}</p>
								<p>{item.createdAt}</p>
							</Box>

						)
					})} */}
        </div>
        <Container alignContent="center">

          <Textarea placeholder='Write Your Comment Here' onChange={targetComment} />
          <Button type='submit' size="sm" onClick={handleSubmit} >Submit</Button>

        </Container>
      </VStack>

    </PageContainer>
  )
}