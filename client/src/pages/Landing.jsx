import { Image, Box, Flex, Stack, Heading, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useUser } from '../utils/UserContext';
import PropTypes from 'prop-types'
import PageContainer from '../component/pageContainer/PageContainer';
import background from '../assets/images/alyssafamilyfoodyum.jpg';

export function Landing({ title,
    subtitle,
    image,
    ctaLink,
    ctaText,
    ...rest
}) {

    const authUser = useUser()

    return (
        <PageContainer>
            <Flex
                align='center'
                justify={
                    {
                        base: 'center',
                        md: 'space-around',
                        xl: 'space-between'
                    }
                }
                direction={{ base: 'column-reverse', md: 'row' }}
                wrap='no-wrap'
                minH='50vh'
                margin={10}
                px={8}
            >
                <Stack
                    spacing={4}
                    w={{ base: '80%', md: '40%' }}
                    align={['center', 'center', 'center', 'center']}>
                    <Heading
                        as='h2'
                        size='med'
                        fontWeight='bold'
                        color='primary.800'
                        textAlign={['center', 'center', 'left', 'left']}>
                        <Text as='i'>"{title}"</Text>
                    </Heading>

                    <Heading
                        as='h2'
                        size='md'
                        color='primary.800'
                        opacity='0.8'
                        fontWeight='normal'
                        lineHeight={1.5}
                        textAlign={['center', 'center', 'left', 'left']}>
                    </Heading>

                    {!authUser.user && <Link to={ctaLink}>
                        <Button
                            colorScheme='teal'
                            borderRadius='8px'
                            py='4'
                            px='4'
                            lineHeight='1'
                            size='md'>
                            {ctaText}
                        </Button>
                    </Link>}

                </Stack>
                <Box
                    w={{ base: '80%', sm: '60%', md: '50%' }}
                    mb={{ base: 12, md: 0 }}>
                    <Image
                        src={background}
                        size='100%'
                        rounded='1rem'
                        shadow='2xl'
                    />
                </Box>
            </Flex>
        </PageContainer>
    )
}

Landing.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
}

Landing.defaultProps = {
    title: "Always remember: If you’re alone in the kitchen and you drop the lamb, you can always just pick it up. Who’s going to know? - Julia Child",
    ctaText: 'Create your account now',
    ctaLink: '/signup',
}