import { Text, Heading, Box, Image, Flex, Button } from '@chakra-ui/react';
import home from '/home.png';
import HomeSmall from '/HomeSmall.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: '2rem', md: '8rem', lg: '10rem' }}
        ml="auto"
        mr="auto"
        maxW="100rem"
        pl="1rem"
        pr="1rem"
        mt={{ md: '10rem' }}
      >
        <Box
          maxW="40rem"
          //   minW={{ base: 'auto', md: '29rem' }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          order={{ base: '1', md: '0' }}
        >
          <Heading
            color="primaryGreen"
            mb={{ base: '1rem', md: '2rem' }}
            textAlign="center"
            size={{ base: 'xl', lg: '2xl' }}
          >
            Creating prescriptions at Ease.
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'xl' }}
            textAlign="center"
            mb="1rem"
          >
            APD creates quick prescriptions with a qr for contact-less drug
            delivery
          </Text>

          <Button
            backgroundColor="primaryGreen"
            color="white"
            _hover={{ bg: 'highlightGreen' }}
            onClick={() => {
              navigate('/doctor');
              // go to
            }}
          >
            Prescribe
          </Button>
        </Box>
        <Box>
          <Image
            display={{ base: 'none', md: 'block' }}
            src={home}
            alt="Landing Image"
          />
          <Image
            display={{ base: 'block', md: 'none' }}
            src={HomeSmall}
            alt="Landing Image"
          />
        </Box>
      </Flex>
    </>
  );
};

export default Hero;
