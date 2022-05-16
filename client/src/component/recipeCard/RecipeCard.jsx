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
    const id = (uri.split('_'))[1]
    return (
        <Center
            maxW={300}
            py={6}>
            <Box
                display={'flex'}
                flexDirection='column'
                flexGrow={1}
                h={'full'}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'md'}
                px={3}
                justifyContent={'space-between'}
                overflow={'hidden'}>

                <Link href={`/recipe/${id}`}>
                    <Image
                        w={'full'}
                        bg={'gray.100'}
                        rounded={'lg'}
                        mt={3}
                        mx={0}
                        mb={1}
                        pos={'relative'}
                        src={image}
                        layout={'fill'}
                    />
                    <Stack>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'md'}
                            fontFamily={'body'}
                            align={'center'}>
                            {label}
                        </Heading>
                    </Stack>
                </Link>

                {dietLabels &&
                    <Stack
                        align={'center'}
                        justify={'center'}
                        direction={'row'}
                        display='flex' m={2}>
                        {dietLabels.map((label,index) => (
                            <Badge
                                key={index}
                                fontSize={'x-small'}
                                px={2}
                                py={1}
                                fontWeight={'400'}>
                                {label}
                            </Badge>
                        ))}
                    </Stack>
                }
            </Box>
        </Center >
    );
}