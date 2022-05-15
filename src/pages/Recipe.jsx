import PageContainer from "../component/pageContainer/PageContainer";
import { RecipeCard } from "../component/recipeCard/RecipeCard";
import { useState } from "react";
import { useQuery } from 'react-query'
import { useSearchParams } from "react-router-dom";
import { recipeBySearch } from "../utils/recipeHelper";
import {
    SimpleGrid,
    Spinner,
    Select,
    HStack,
    Input,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button,
    Box,
    Flex,
    Skeleton
} from "@chakra-ui/react";

export function Recipe() {
    let [searchParams, setSearchParams] = useSearchParams();

    const [params, setParams] = useState(Object.fromEntries(searchParams) ?? { q: "" })

    let dietOptions = ['', 'balanced', 'high-fiber', 'high-protein', 'low-carb', 'low-fat', 'low-sodium']

    let healthOptions = ['', 'alcohol-cocktail', 'alcohol-free', 'celery-free', 'crustacean-free',
        'dairy-free', 'DASH', 'egg-free', 'fish-free', 'fodmap-free', 'gluten-free', 'immuno-supportive', 'keto-friendly', 'kidney-friendly', 'kosher', 'low-fat-abs', 'low-potassium', 'low-sugar', 'lupine-free', 'Mediterranean', 'mollusk-free', 'mustard-free', 'no-oil-added', 'paleo', 'peanut-free', 'pescatarian', 'pork-free', 'red-meat-free', 'sesame-free', 'shellfish-free', 'soy-free', 'sugar-conscious', 'sulfite-free', 'tree-nut-free', 'vegan', 'vegetarian', 'wheat-free']

    let cuisineOptions = ['', 'American', 'Asian', 'British', 'Caribbean', 'Central Europe', 'Chinese', 'Eastern Europe', 'French', 'Indian', 'Italian', 'Japanese', 'Kosher', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'South American', 'South East Asian']

    const { isLoading, data, refetch, isSuccess } = useQuery({
        queryKey: ["recipes", [...searchParams]],
        queryFn: recipeBySearch,
        ...{ enabled: !!searchParams.get('q') }
    })

    const handleChange = (e) => {
        setParams(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    return (
        <PageContainer>
            <Flex flex={1} flexDir={"column"}>
            <Flex
                justifyContent={"space-between"}
                mx={10}
                my={5}
                direction={{ base: "row", sm: "column", md: "row" }}
                gap={{ sm: 5 }}>
                <Flex
                    flex={0.5}
                    gap={2}>
                    <Input
                        bg={'#F9F6EE'}
                        borderColor={'light gray'}
                        border={'1px'}
                        id="q"
                        value={params.q}
                        placeholder='Recipe Search'
                        onChange={handleChange} >
                    </Input>
                    <Button onClick={e => setSearchParams(params)}>Search</Button>

                </Flex>

                <Accordion flex={0.3} allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Advanced Search Options
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex
                                direction={"column"}
                                gap={{ sm: 5 }}
                            >
                                <Select id="diet" value={params.diet} placeholder='Diet' onChange={handleChange}  >
                                    {dietOptions.map(option => (
                                        <option value={option}>{option}</option>
                                    ))}
                                </Select>
                                <Select id='health' value={params.health} placeholder='Restrictions' onChange={handleChange} >
                                    {healthOptions.map(option => (
                                        <option value={option}>{option}</option>
                                    ))}
                                </Select>
                                <Select id='cuisineType' value={params.cuisineType} placeholder='Cuisine' onChange={handleChange} >
                                    {cuisineOptions.map(option => (
                                        <option value={option}>{option}</option>
                                    ))}
                                </Select>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
            <Skeleton isLoaded={isSuccess}>
            <SimpleGrid minChildWidth='240px' spacing='20px' margin='8'>
                {data?.hits.map(hit => (<RecipeCard {...hit.recipe} />))}
            </SimpleGrid>
            </Skeleton>
            </Flex>
        </PageContainer>
    )
}