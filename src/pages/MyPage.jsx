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


export function MyPage(props) {
const authUser = useUser()
const [ readyToRender, setReadyToRender ] = useState(false)
const [ favoriteList, setFavoriteList ] = useState([])
const [ username, setUsername ] = useState()


const getFavorites = async() => {
  const userID = authUser.user._id
  const query = await fetch(`/api/user/${userID}`)
  const result = await query.json()
  setFavoriteList(result)
  setReadyToRender(true)
}

console.log(favoriteList)

useEffect( () => {
  getFavorites()
}, [])

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
    { readyToRender === true &&(
      <SimpleGrid minChildWidth='240px' spacing='20px' margin='8'>
      {favoriteList.favorites.map( (<RecipeCard />))}
      </SimpleGrid>
    )}
    </PageContainer>
    )
}