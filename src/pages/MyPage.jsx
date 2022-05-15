import PageContainer from "../component/pageContainer/PageContainer";
import React from "react";
import PropTypes from "prop-types"
import { useEffect, useState } from "react";
import { useQuery } from 'react-query'
import { useUser } from "../utils/UserContext";
import { RecipeCard } from "../component/recipeCard/RecipeCard";
import { recipeByID } from "../utils/recipeHelper";
import {
  Stack,
  Text,
  SimpleGrid,
  Image,
  useBreakpointValue,
  Heading,
  Flex,
  Box,
  Button
} from '@chakra-ui/react';

export function MyPage(props) {
  const authUser = useUser()
  const [readyToRender, setReadyToRender] = useState(false)
  const [favoriteList, setFavoriteList] = useState([])

  const getFavorites = async () => {
    const userID = authUser.user._id
    const query = await fetch(`/api/user/${userID}`)

    return query.json()
  }
  const getAllFavorites = async ({ queryKey }) => {
    const data = queryKey[1]

    return Promise.all(data.favorites.map(item => recipeByID({ id: item })))
  }
  const favorites = useQuery({
    queryKey: ["favoriteList", authUser.user],
    queryFn: getFavorites,
    enabled: !!authUser.user
  })

  const API = useQuery({
    queryKey: ["favoriteList", favorites.data],
    queryFn: getAllFavorites,
    enabled: !!favorites.data
  })
  
  return (

    <PageContainer>
      <Flex direction={"column"} >
      <Flex
        align="center"
        justify={
          {
            base: "center",
            md: "space-around",
            xl: "space-between"
          }
        }
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="70vh"
        margin={10}
        px={8}
        // mr={14}
        // mt={10}
        // mb={10}
        >

        <Stack
          spacing={4}
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}>

          <Heading
            as="h2"
            size="med"
            fontWeight="bold"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}>

            <Text color={'#00CECB'} as={'span'}>
            {favorites?.data?.username}'s Favorites
            </Text>{' '}
          </Heading>

          <Text
            fontSize={{ base: 'md', lg: 'lg' }}
            color={'gray.500'}>
            Any recipes you've favorited will show up below!
          </Text>

          <Heading
            as="h2"
            size="md"
            color="primary.800"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={["center", "center", "left", "left"]}>
          </Heading>
        </Stack>

        <Box
          w={{ base: "100%", sm: "75%", md: "75%" }}
          mb={{ base: 5, md: 0 }}>

          <Image
            src={
              'https://source.unsplash.com/1600x900/?healthy-food'}
            size="100%"
            rounded="1rem"
            shadow="2xl"
          />
        </Box>
      </Flex>

      {API.isSuccess && (
        <SimpleGrid
          spacing='20px'
          margin='8'>

          {API.data.map((item, index) => (<RecipeCard key={index} {...item.recipe} />))}

        </SimpleGrid>
      )}
          </Flex>
    </PageContainer>
  )
}