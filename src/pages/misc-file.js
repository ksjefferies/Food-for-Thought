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
    px={8}
    mr={14}
    mt={10}
    mb={10}>

    <Flex
        flex={1}
        align={'center'}
        justify={'center'}>

        <Stack
            spacing={3}
            w={'75%'}
            maxW={'lg'}>

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

            <Text
                fontSize={{ base: 'md', lg: 'lg' }}
                color={'gray.500'}>
                Any recipes you've favorited will show up below!
            </Text>
        </Stack>
    </Flex>

    <Flex
        align="center"
        justify={
            {
                base: "center",
                md: "space-around",
                xl: "space-between"
            }
        } flex={0.9}>

        <Image
            borderRadius={5}
            sizes={"100%"}
            alt={'Login Image'}
            src={
                'https://source.unsplash.com/1600x900/?healthy-food'
            }
        />
    </Flex>
</Flex>