import PageContainer from "../pageContainer/PageContainer";
import { Avatar, Box, Stack, Text, useColorModeValue, Container, IconButton  } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'




export function About() {
    return (
        <PageContainer>

            <Stack
                bg={'#F1F3F0'}
                py={16}
                px={8}
                spacing={{ base: 8, md: 10 }}
                align={'center'}
                direction={'column'}>
                <Text
                    fontSize={{ base: 'xl', md: '2xl' }}
                    textAlign={'center'}
                    maxW={'3xl'}>
                    This project means a lot to each one of us. We wanted to provide a go to place for users like us with dietary restrictions from various walks of life. From simple intolerances to life altering diet changes, we hoped to serve those who have difficulties finding the right food to eat. 
                </Text>
                <Container display={'inline-flex'} maxW={{base: '100%', md: '50%'}}>
                <Container >
                <Box>
                    <Avatar
                        boxShadow={'-10px 10px 0 5px #00CECB'}
                        size={{base: 'l', md: '2xl'}}
                        src={
                            'https://avatars.githubusercontent.com/u/97249322?v=4'
                        }
                        alt={'Kelly Jefferies'}
                        mb={5}
                    />
                    <Text mb={2} fontWeight={600}>Kelly Jefferies</Text>
                    <Container display={'flex'} justifyContent={'center'}>
                    <a href="https://github.com/ksjefferies"><IconButton bg={'#7FB5A4'} mr={1} icon={<FontAwesomeIcon icon={faGithub}/>} color={'black'}/></a>
                    <a href="https://www.linkedin.com/in/kelly-jefferies-14483418/"><IconButton bg={'#7FB5A4'} icon={<FontAwesomeIcon icon={faLinkedin}/>} color={'black'}/></a>
                    </Container>
                    
                </Box>
                </Container>
                <Container maxW={'100%'}
                minW={'100%'}>
                <Box maxW={'100%'}
                     minW={'250px'}
                     p={'4'}
                     bg={'#1A1C25'}
                     color={'white'}
                     maxH={'100%'} minH={'20%'}
                     boxShadow={'-10px 10px 0 5px #81716F'}
                     >
                    I'm a Full Stack developer with 10 years experience in IT Support Management. I recently transitioned into the web development world after earning a certificate in Full Stack Web Development (MERN) from Southern Methodist University. 
                </Box>
                </Container>
                </Container>
                <Container display={'inline-flex'} maxW={{base: '100%', md: '50%'}}>
                <Container maxW={'50%'}
                minW={'100%'}>
                <Box maxW={'100%'}
                     minW={'250px'}
                     p={'4'}
                     bg={'#1A1C25'}
                     color={'white'}
                     maxH={'100%'} minH={'20%'}
                     boxShadow={'-10px 10px 0 5px #81716F'}
                     >
                    Hey Alyssa I need some things for you to enter here! I'm just trying to fill the space to make sure everything looks right. Blah blah, great developer, blah blah, Alyssa is amazing at what she does. Hey look at her go!  
                </Box>
                </Container>
                <Container >
                <Box>
                    <Avatar
                        boxShadow={'-10px 10px 0 5px #00CECB'}
                        size={'2xl'}
                        src={
                            'https://avatars.githubusercontent.com/u/99490187?v=4'
                        }
                        alt={'Alyssa Rodriguez'}
                        mb={7}
                    />
                    <Text fontWeight={600}>Alyssa Rodriguez</Text>
                    <Container display={'flex'} justifyContent={'center'}>
                    <a href="https://github.com/AlyssaRodri"><IconButton bg={'#7FB5A4'} mr={1} icon={<FontAwesomeIcon icon={faGithub}/>} color={'black'}/></a>
                    <a href="https://www.linkedin.com/in/kelly-jefferies-14483418/"><IconButton bg={'#7FB5A4'} icon={<FontAwesomeIcon icon={faLinkedin}/>} color={'black'}/></a>
                    </Container>
                </Box>
                </Container>
                </Container>
                <Container display={'inline-flex'} maxW={{base: '100%', md: '50%'}}>
                <Container >
                <Box>
                    <Avatar
                        boxShadow={'-10px 10px 0 5px #00CECB'}
                        size={'2xl'}
                        src={
                            'https://avatars.githubusercontent.com/u/100049940?v=4'
                        }
                        alt={'Stephen Elliot'}
                        mb={7}
                    />
                    <Text fontWeight={600}>Stephen Elliot</Text>
                    <Container display={'flex'} justifyContent={'center'}>
                    <a href="https://github.com/UsernameisStephen"><IconButton bg={'#7FB5A4'}mr={1} icon={<FontAwesomeIcon icon={faGithub}/>} color={'black'}/></a>
                    <a href="https://www.linkedin.com/in/alyssa-rodriguez-935433152/"><IconButton bg={'#7FB5A4'} icon={<FontAwesomeIcon icon={faLinkedin}/>} color={'black'}/></a>
                    </Container>
                </Box>
                </Container>
                <Container maxW={'50%'}
                minW={'100%'}>
                <Box maxW={'100%'}
                     minW={'250px'}
                     p={'4'}
                     bg={'#1A1C25'}
                     color={'white'}
                     maxH={'100%'} minH={'20%'}
                     boxShadow={'-10px 10px 0 5px #81716F'}
                     >
                    I am a student currently enrolled in a coding bootcamp through Southern Methodist University in Dallas. I grabbed this from your GitHub, but it would be nice to have some info from your LinkedIn or brand statment here! Filling some more space up cause I need to see what the box looks like if it has ooodles and boodles of info so I'm just going to keep typing here to make sure the box doesn't get too out of wack. Please give me some info so I can place it here in this stead so its not just me rambling on and on to test things. 
                </Box>
                </Container>
                </Container>
                <Container display={'inline-flex'} maxW={{base: '100%', md: '50%'}}>
                <Container maxW={'50%'}
                minW={'100%'}>
                <Box maxW={'100%'}
                     minW={'250px'}
                     p={'4'}
                     bg={'#1A1C25'}
                     color={'white'}
                     maxH={'100%'} minH={'20%'}
                     boxShadow={'-10px 10px 0 5px #81716F'}
                     >
                    I have always been the go-to person in my family to fix computer hardware issues and solve mysteries of "why the internet went out". I decided that it was time I get paid to render services to those in need for professional help. In school I learned more about the possibilities of automation and how it could begin to make life so much easier for those in need. From peoples with disabilities, to those trying to discover new means to accomplish everyday goals, technology and automation is constantly evolving and wanting for more creative minds to solve mysteries. Through working in the corporate world in my short time so far, it is clear that there is a need to keep evolving. I started learning more on my own the intricacies of demystifying technology to those in need of it. I dived headlong into technology and never looked back and hope to continue to grow my skills to help those in need. 
                </Box>
                </Container>
                <Container >
                <Box>
                    <Avatar
                        boxShadow={'-10px 10px 0 5px #00CECB'}
                        size={'2xl'}
                        src={
                            'https://github.com/Victorini1/myportfololio/blob/main/assets/images/me.jpg?raw=true'
                        }
                        alt={'Victor Kennedy'}
                        mb={7}
                    />
                    <Text fontWeight={600}>Victor Kennedy</Text>
                    <Container display={'flex'} justifyContent={'center'}>
                    <a href="https://github.com/Victorini1"><IconButton bg={'#7FB5A4'} mr={1}icon={<FontAwesomeIcon icon={faGithub}/>} color={'black'}/></a>
                    <a href="https://www.linkedin.com/in/victor-kennedy5/"><IconButton bg={'#7FB5A4'} icon={<FontAwesomeIcon icon={faLinkedin}/>} color={'black'}/></a>
                    </Container>
                </Box>
                </Container>
                </Container>
            </Stack>

        </PageContainer>
    )
}