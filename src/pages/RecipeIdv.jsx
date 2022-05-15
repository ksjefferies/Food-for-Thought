import PageContainer from "../component/pageContainer/PageContainer";
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
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
  Skeleton
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
    if (isFavorite !== true) {
      const userID = authUser.user._id
      const query = await fetch(`/api/user/${userID}/favorites`, {
        method: "POST",
        body: JSON.stringify({ favorite: id }),
        headers: { "Content-Type": "application/json" }
      })
      const result = await query.json()
      console.log(result)
     

    } 
    
    else {
     
      const userID = authUser.user._id
      const query = await fetch(`/api/user/${userID}/favorites`, {
        method: "DELETE",
        body: JSON.stringify({ favorite: id }),
        headers: { "Content-Type": "application/json" }
      })
      const result = await query.json()
      console.log(result)
      setIsFavorite(!isFavorite)
    }

  }

  const checkFavorite = async () => {
    const userID = authUser.user._id
    const query = await fetch (`/api/user/${userID}`, {
      method: "GET",
      headers:  { "Content-Type": "application/json" }
    })
    console.log(query)
  }

  return (
    <PageContainer>
      <Flex
        flex={1}
        flexDir={"column"}
        my={50}
        align={"center"}
      >
      
        <SimpleGrid
          maxW={800}
          bg={'#E2F0FF'}
          rows={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          p={'5'}

        >   
         <Skeleton flex={1} isLoaded={recipe.isSuccess}>
        
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

                />
              }
            </Flex>

            <Accordion allowToggle >
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Nutrition Info
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <TableContainer>
                      <Table>
                        <Thead>
                          <Th textDecoration={"underline"}>Nutrient</Th>
                          <Th textDecoration={"underline"} isNumeric>Amount</Th>
                          <Th textDecoration={"underline"}>Unit</Th>
                        </Thead>
                        <Tbody>
                          {edamame.data && Object.values(edamame?.data?.recipe?.totalNutrients).map((item, index) => (
                            <Tr>
                              <Td>{item.label}</Td>
                              <Td isNumeric>{parseFloat(item.quantity).toFixed(2)}</Td>
                              <Td>{item.unit}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </AccordionPanel>
                </h2>
              </AccordionItem>
            </Accordion>
            <Flex justify={"flex-start"} align={"flex-start"}>
              <Flex direction={'column'} >
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
              </Flex>
            </Flex>
          </Stack>
        
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

          {edamame?.data && <Link justifySelf={"flex-end"} color="blue.500" isExternal href={edamame?.data?.recipe?.url} target="_blank" >Source Link</Link>}
          </Skeleton>
        </SimpleGrid>
     
      </Flex>
    </PageContainer>
  )
}