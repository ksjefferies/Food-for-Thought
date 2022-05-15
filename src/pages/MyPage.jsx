import React from "react";
import { useEffect, useState } from "react";
import PageContainer from "../component/pageContainer/PageContainer";
import { 
    Stack, 
    Text, 
    SimpleGrid, 
    Image, 
    Container,
    useBreakpointValue,
    Heading,
    Button,
    Flex,
} from '@chakra-ui/react';
import { useUser } from "../utils/UserContext";
import { RecipeCard } from "../component/recipeCard/RecipeCard";
import { useQuery } from 'react-query'
import { recipeByID } from "../utils/recipeHelper";


export function MyPage(props) {
const authUser = useUser()
const [ readyToRender, setReadyToRender ] = useState(false)
const [ favoriteList, setFavoriteList ] = useState([])

const getFavorites = async() => {
  const userID = authUser.user._id
  const query = await fetch(`/api/user/${userID}`)
  return query.json()
}
const getAllFavorites = async ({ queryKey }) => {
 const data = queryKey[1]
 return Promise.all(data.favorites.map(item => recipeByID({id: item})))
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

            <Stack minH={'35vh'} direction={{ base: 'column-reverse', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
                
              }}>
            
            </Text>
            <br />{' '}
            <Text color={'#00CECB'} as={'span'}>
              Favorites
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Any recipes you've favorited will show up below!
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://source.unsplash.com/1600x900/?healthy-food'
          }
        />
      </Flex>
    </Stack>
   {API.isSuccess &&(
      <SimpleGrid minChildWidth='240px' spacing='20px' margin='8'>
        {API.data.map(( item, index ) =>  ( <RecipeCard key={index} {...item.recipe }/>))}
      </SimpleGrid>
    )}
    </PageContainer>
    )
}