import { Box } from "@chakra-ui/react"
import Header from "./header/header"
import Footer from "./footer/footer"

export default function PageContainer({ children }) {
    return (
        <Box>
            <Header/>
            {children}
            <Footer/>
        </Box>
    )
}