import { Box, Flex } from "@chakra-ui/react"
import Header from "./header/Header"
import Footer from "./footer/Footer"

export default function PageContainer({ children }) {
    return (
        <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
            width={"full"}>
            <Header />
            <Box
                flex={1}
                flexGrow={1}
                marginTop={"75"}
            >
                {children}
            </Box>
            <Footer />
        </Flex>
    )
}