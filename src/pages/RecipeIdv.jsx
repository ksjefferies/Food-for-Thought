import PageContainer from "../component/pageContainer/PageContainer";
// import RenderComments from "../component/comments/Comment"
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { recipeByID, recipeByURL } from "../utils/recipeHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
import { useUser } from '../utils/UserContext'
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
  HStack
} from '@chakra-ui/react';

export function RecipeIdv() {
  const { id } = useParams();
  const authUser = useUser()
  const [isFavorite, setIsFavorite] = useState(false);

  const edamame = useQuery({
    queryKey: ["recipePage", id],
    queryFn: recipeByID,
    ...{ enabled: !!id }
  })

  const url = edamame?.data?.recipe?.url

  const recipe = useQuery({
    queryKey: ["recipePage", url],
    queryFn: recipeByURL,
    ...{ enabled: !!url }
  })

  const handleFav = async () => {
    setIsFavorite(!isFavorite)
    if (isFavorite === true) {
      //save it to DB
      const userID = authUser.user._id
      const fav = id
    } else {
      //or delete it from DB
    }
  }

  return (
    <PageContainer>
      <Container maxW={'3xl'} bg={'#E2F0FF'}>
        <SimpleGrid
          rows={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={'5'}
          my={{ base: 15, md: 20 }}>

          <Stack spacing={{ base: 6, md: 2 }}>
            <HStack
              as={'header'}
              justify={'space-between'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>

                {recipe?.data?.title}

              </Heading>

              {authUser.user !== null && (
                <FontAwesomeIcon
                  icon={isFavorite ? faStar : regularStar}
                  size="3x"
                  color="#3275a8"
                  onClick={handleFav}
                />)
              }

            </HStack>
            <Text
              fontSize={{ base: '13px', lg: '15px' }}
              fontWeight={'500'}
              textTransform={'uppercase'}>

              {`Yield: ${recipe?.data?.yields}`}

            </Text>

            <Flex justifyContent={'center'}>

              {recipe?.data?.image &&
                <Image
                  rounded={'md'}
                  alt={'product image'}
                  src={recipe?.data?.image}
                  fit={'cover'}
                  align={'center'}
                  w={'50%'}
                  h={{ base: '50%', sm: '400px', lg: '500px' }}
                />
              }
            </Flex>

            <HStack gap={'30'}>
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
                    color={useColorModeValue('black')}
                    fontWeight={'500'}
                    textDecoration={'underline'}
                    textTransform={'uppercase'}
                    mb={'4'}>

                    Ingredients
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                    <UnorderedList w={'100%'}>

                      {recipe?.data?.ingredients.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>))
                      }
                    </UnorderedList>
                  </SimpleGrid>

                </Box>
              </Stack>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}

                divider={
                  <StackDivider
                    borderColor={useColorModeValue('black')}
                  />
                }>
                <Box>

                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={useColorModeValue('black')}
                    fontWeight={'500'}
                    textDecoration={'underline'}
                    textTransform={'uppercase'}
                    mb={'4'}>

                    Nutrients
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                    <UnorderedList w={'100%'}>

                      {recipe?.data?.ingredients.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>))
                      }
                    </UnorderedList>
                  </SimpleGrid>

                </Box>
              </Stack>
            </HStack>
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
              fontSize={{ base: '16px', lg: '18px' }}
              color={useColorModeValue('black')}
              fontWeight={'500'}
              textDecoration={'underline'}
              textTransform={'uppercase'}
              mb={'3'}
              pt={{ base: 15, md: 1 }}>

              Directions
            </Text>

            {recipe?.data?.instructions.split("\n").map((line, index) => (
              <Text
                key={index}
                // fontSize={{ base: 'xl', md: '2xl' }}
                textAlign={'left'}
                maxW={'6xl'}
                mb={'5'}>

                {line}

              </Text>))
            }
          </Box>
        </Stack>
      </Container>
    </PageContainer>
  )
}