import { Box } from "@chakra-ui/react"
import Header from "./header/Header"
import Footer from "./footer/Footer"

export default function PageContainer({ children }) {
    return (
        <Box>
            <Header/>
            {children}
            <Footer/>
        </Box>
    )
}