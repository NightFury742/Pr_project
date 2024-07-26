import {
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Image,
} from '@chakra-ui/react';
import { BiUserCheck, BiUserPlus } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '/Logo.png';
import LogoSmall from '/LogoSmall.png';

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <Flex
        align="center"
        w="100%"
        top="0"
        positon="sticky"
        h={['60px', '110px']}
        boxShadow="0px 2px 3px lightgray"
        pr={['15px', '30px']}
        bgColor="primaryGreen"
        zIndex="1"
        mb="4rem"
      >
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
        <Spacer />
        <Flex display={{ base: 'none', md: 'block' }}>
          <Flex>
            <Button
              borderRadius="0.5rem"
              fontSize="1.1rem"
              px="2rem"
              _hover={{
                bg: '#dbdbdb',
              }}
              onClick={() => navigate('/login')}
            >
              Log In
            </Button>
            <Button
              bg="accent"
              color="#ffffff"
              fontSize="1.1rem"
              px="2rem"
              ml="1.5rem"
              _hover={{ bg: '#5C9C89' }}
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </Button>
          </Flex>
        </Flex>

        {/* For Phone Viewport */}
        <Flex display={{ base: 'block', md: 'none' }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              border="3px solid #FFFFFF"
              borderRadius="1.2rem"
              icon={<GiHamburgerMenu size="1.5rem" color="white" />}
              variant="outline"
            />
            <MenuList>
              <MenuItem
                icon={<BiUserCheck size="1.7rem" color="#005856" />}
                onClick={() => navigate('/login')}
                color="primaryGreen"
              >
                Log In
              </MenuItem>
              <MenuItem
                icon={<BiUserPlus size="1.7rem" color="#005856" />}
                onClick={() => navigate('/signup')}
                color="primaryGreen"
              >
                Sign Up
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
