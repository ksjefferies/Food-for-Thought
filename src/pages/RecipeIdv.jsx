import PageContainer from "../component/pageContainer/PageContainer";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { recipeByID } from "../utils/recipeHelper";
import { useState } from 'react'
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
	VStack,
	Textarea,
	Button,
} from '@chakra-ui/react';

export function RecipeIdv() {
	const { id } = useParams();
	const { data } = useQuery({
		queryKey: ["recipePage", id],
		queryFn: recipeByID,
		...{ enabled: !!id }
	})

	// Code for comments
	const [ commentData, setCommentData] = useState({
		commentBody: ''
	})
	
	const targetComment = (e) => {
		const {value} = e.target;
		setCommentData({...value})
	}

	async function handleSubmit(e) {
        e.preventDefault();
        console.log("Comment Submitted")
		console.log("Comment added!")
		setCommentData({ ...commentData, "comment": ''})
    }

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
				<div>
					{/* {this.Comment?.map(item => {
						return (
							<Box h='40px' margin="1rem" bg='yellow.200' key={item.commentId}>
								<p>{item.commentBody}</p>
								<p>{item.createdAt}</p>
							</Box>

						)
					})} */}
				</div>
				<Container alignContent="center">
					
					<Textarea placeholder='Write Your Comment Here' onChange={targetComment}/>
					<Button type='submit' size="sm" onClick={handleSubmit} >Submit</Button>

				</Container>
			</VStack>

		</PageContainer>
	)
}