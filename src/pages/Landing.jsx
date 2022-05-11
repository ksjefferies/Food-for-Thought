import PageContainer from "../component/pageContainer/PageContainer";
import { Image, Box, Flex, Stack, Heading, Button } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import background from "../assets/images/alyssafamilyfoodyum.jpg";

export function Landing({
    title,
    subtitle,
    image,
    ctaLink,
    ctaText,
    ...rest
}) {
    return (
        <PageContainer>
            <Flex
                align="center"
                justify={{ base: "center", md: "space-around", xl: "space-between" }}
                direction={{ base: "column-reverse", md: "row" }}
                wrap="no-wrap"
                minH="70vh"
                px={8}
                mb={16}
                {...rest}
            >
                <Stack
                    spacing={4}
                    w={{ base: "80%", md: "40%" }}
                    align={["center", "center", "flex-start", "flex-start"]}
                >
                    <Heading
                        as="h1"
                        size="xl"
                        fontWeight="bold"
                        color="primary.800"
                        textAlign={["center", "center", "left", "left"]}
                    >
                        {title}
                    </Heading>
                    <Heading
                        as="h2"
                        size="md"
                        color="primary.800"
                        opacity="0.8"
                        fontWeight="normal"
                        lineHeight={1.5}
                        textAlign={["center", "center", "left", "left"]}
                    >
                        {subtitle}
                    </Heading>
                    <Link to={ctaLink}>
                        <Button
                            colorScheme="teal"
                            borderRadius="8px"
                            py="4"
                            px="4"
                            lineHeight="1"
                            size="md"
                        >
                            {ctaText}
                        </Button>
                    </Link>
                </Stack>
                <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                    <Image src={background} size="100%" rounded="1rem" shadow="2xl" />
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
    title: "This is our recipe App",
    subtitle: "This is the description of our website.",
    ctaText: "Create your account now",
    ctaLink: "/auth",
}