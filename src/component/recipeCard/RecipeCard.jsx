import { SimpleGrid } from '@chakra-ui/react';
import {
    Box,
    Center,
    Heading,
    Stack,
    useColorModeValue,
    Image,
    Link,
    Badge
} from '@chakra-ui/react';

export const RecipeCard = ({ label, image, dietLabels, uri }) => {
    const id = (uri.split("_"))[1]
    return (
        <Center py={6}>
            <Box
                flex={1}
                flexDirection={1}
                maxW={'445px'}
                w={'half'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>

                <Image
                    h={'370px'}
                    w={'full'}
                    bg={'gray.100'}
                    border={'1px'}
                    rounded={'lg'}
                    mt={0}
                    mx={0}
                    mb={6}
                    pos={'relative'}
                    src={image}
                    layout={'fill'}
                />

                <Stack>
                    <Link href={`/recipe/${id}`}>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}
                            align={'center'}>
                            {label}
                        </Heading>
                    </Link>
                </Stack>

                {dietLabels &&

                    <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                        {dietLabels.map(label => (
                            <Badge px={2}
                                py={1}
                                fontWeight={'400'}
                            >
                                {label}

                            </Badge>
                        ))}
                    </Stack>
                }
            </Box>
        </Center>
    );
}