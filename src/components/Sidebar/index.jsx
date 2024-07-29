import { Flex, Image, Button } from '@chakra-ui/react';
import { RiHomeLine } from 'react-icons/ri';
import { TbReportSearch } from 'react-icons/tb';
import { TfiWrite } from 'react-icons/tfi';
import { FiLogOut } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '/Logo.png';
import LogoSmall from '/LogoSmall.png';

function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        justifyContent="flex-start"
        alignContent="center"
        flexDirection="column"
        w="14%"
        top="0"
        positon="sticky"
        float="left"
        h="100vh"
        boxShadow="0px 2px 3px lightgray"
        //pr={['15px', '30px']}
        pt="12px"
        bgColor="primaryGreen"
        zIndex="1"
        mb="4rem"
      >
        <Flex justifyContent="center">
          <Link to="/">
            <Image
              src={Logo}
              alt="Logo"
              display={{ base: 'none', md: 'block' }}
            />
            <Image
              src={LogoSmall}
              alt="Logo"
              display={{ base: 'block', md: 'none' }}
            />
          </Link>
        </Flex>

        <Flex flexDirection="column" px="1rem" pt="6rem" gap="1rem">
          <Button
            color="#ffffff"
            fontWeight="400"
            fontSize="1.3rem"
            bg="primaryGreen"
            _hover={{ bg: '#003A3C' }}
            onClick={() => navigate('/doctor')}
            justifyContent="left"
            gap="0.4rem"
          >
            <RiHomeLine size="1.5rem" />
            Home
          </Button>

          <Button
            color="#ffffff"
            fontWeight="400"
            fontSize="1.3rem"
            bg="primaryGreen"
            _hover={{ bg: '#003A3C' }}
            onClick={() => navigate('/doctor/prescribe')}
            justifyContent="left"
            gap="0.4rem"
          >
            <TfiWrite size="1.5rem" />
            Prescibe
          </Button>
          <Button
            color="#ffffff"
            fontWeight="400"
            fontSize="1.3rem"
            bg="primaryGreen"
            _hover={{ bg: '#003A3C' }}
            onClick={() => navigate('/doctor/prescriptions')}
            justifyContent="left"
            gap="0.4rem"
          >
            <TbReportSearch size="1.5rem" />
            Prescriptions
          </Button>

          <Button
            color="#ffffff"
            fontWeight="400"
            fontSize="1.3rem"
            bg="primaryGreen"
            _hover={{ bg: '#003A3C' }}
            // onClick={() => navigate('/logout')}
            justifyContent="left"
            gap="0.4rem"
          >
            <FiLogOut size="1.5rem" />
            Logout
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Sidebar;
