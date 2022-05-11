import PageContainer from "../component/pageContainer/PageContainer";
import { useParams } from "react-router";
import { useQuery } from "react-query";

import { recipeByID } from "../utils/recipeHelper";

import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
    Spinner,
} from '@chakra-ui/react';

// import CommentSection from "../component/comments"


export function RecipeIdv() {
    const { id } = useParams();
    const { isLoading, data } = useQuery({
        queryKey: ["recipePage", id],
        queryFn: recipeByID,
        ...{ enabled: !!id }
    })


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
                            src={
                                'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
                            }
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={{ base: '100%', sm: '400px', lg: '500px' }}
                        />
                    </Flex>
                    <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={'header'}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                {data?.recipe?.label}
                            </Heading>
                        </Box>

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
                                    Dietary Labels
                                </Text>

                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                    <List>
                                        {data?.recipe?.ingredientLines.map(item => (
                                            <ListItem>{item}</ListItem>
                                        ))}
                                    </List>
                                </SimpleGrid>
                            </Box>
                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color={useColorModeValue('yellow.500', 'yellow.300')}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Product Details
                                </Text>

                                <List spacing={2}>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Between lugs:
                                        </Text>{' '}
                                        20 mm
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Bracelet:
                                        </Text>{' '}
                                        leather strap
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Case:
                                        </Text>{' '}
                                        Steel
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Case diameter:
                                        </Text>{' '}
                                        42 mm
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Dial color:
                                        </Text>{' '}
                                        Black
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Crystal:
                                        </Text>{' '}
                                        Domed, scratch‑resistant sapphire crystal with anti‑reflective
                                        treatment inside
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Water resistance:
                                        </Text>{' '}
                                        5 bar (50 metres / 167 feet){' '}
                                    </ListItem>
                                </List>
                            </Box>
                        </Stack>

                        <Button
                            rounded={'none'}
                            w={'full'}
                            mt={8}
                            size={'lg'}
                            py={'7'}
                            bg={useColorModeValue('gray.900', 'gray.50')}
                            color={useColorModeValue('white', 'gray.900')}
                            textTransform={'uppercase'}
                            _hover={{
                                transform: 'translateY(2px)',
                                boxShadow: 'lg',
                            }}>
                            Add to cart
                        </Button>

                        <Stack direction="row" alignItems="center" justifyContent={'center'}>

                            <Text>2-3 business days delivery</Text>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>

        </PageContainer>
    )
}