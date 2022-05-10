import PageContainer from "../pageContainer/PageContainer";
import { Image, Box } from '@chakra-ui/react'

import background from "../../assets/images/Recipes-Banner.jpeg";

export function Landing() {
    return (
        <PageContainer>
            <Box boxSize='lg'>
                <Image src={background} alt='Recipes' /> {/*Replace with full background image */}
            </Box>
        </PageContainer>
    )
}