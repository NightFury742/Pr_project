import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiHide, BiShow } from 'react-icons/bi';
import docAnimation from '../../animations/docAnimation.json';
import Lottie from 'lottie-react';
import useMedicineStore from '../../Store/MedicineStore';

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    userName: '',
    password: '',
  });

  const { userName, password } = loginData;

  const { addAuth, valueSetter } = useMedicineStore((state) => ({
    addAuth: state.addAuth,
    valueSetter: state.valueSetter,
  }));

  const navigate = useNavigate();
  const toast = useToast();

  const onChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  async function makeLoginRequest() {
    const response = await axios.post(
      'http://localhost:5000/doctor/login',
      {
        userName: userName,
        password: password,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return response;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!(userName && password)) {
      toast({
        title: 'Incomplete Entries',
        description: 'Please enter both userName and password',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
      return;
    }

    setLoading(true);
    try {
      const result = await makeLoginRequest();

      addAuth();
      valueSetter(result.doctorName, 'doctorName');
      localStorage.setItem('userName', result.userName);

      toast({
        title: 'Logged in !',
        description: `Welcome ${result.doctorName}`,
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });

      navigate('/doctor');
      setLoading(false);
    } catch (error) {
      setLoading(false);

      toast({
        title: 'Error',
        description: 'Invalid credentials',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        height="60rem"
        gap="15rem"
      >
        <Lottie animationData={docAnimation} />
        <Stack>
          <Text
            textAlign="center"
            color=""
            fontSize={['1.7rem', '2.2rem']}
            fontWeight="600"
            mb="1rem"
          >
            Log In
          </Text>
          <Flex
            direction="column"
            border="2px solid #005856"
            w={['20rem', '27rem']}
            px={['1rem', '2rem']}
            py={['1rem', '2rem']}
            borderRadius="0.8rem"
            mb="1rem"
          >
            <form onSubmit={onSubmit}>
              <Box mb={['1rem', '2rem']}>
                <Text mb="0.5rem" fontSize={['1.1rem', '1.2rem']}>
                  User Name:
                </Text>
                <Box bg="#ffffff" borderRadius="0.4rem">
                  <Input
                    type="text"
                    focusBorderColor="primaryGreen"
                    bg="#ecedf6"
                    id="userName"
                    name="userName"
                    value={userName}
                    placeholder="Enter your username..."
                    onChange={onChange}
                  />
                </Box>
              </Box>
              <Box mb={['1rem', '2rem']}>
                <Text mb="0.5rem" fontSize={['1.1rem', '1.2rem']}>
                  Password
                </Text>
                <Box bg="#ffffff" borderRadius="0.4rem">
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      focusBorderColor="#ce1567"
                      bg="#ecedf6"
                      id="password"
                      name="password"
                      value={password}
                      placeholder="Password..."
                      onChange={onChange}
                    />
                    <InputRightElement
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? (
                        <BiHide
                          style={{ width: '20px', height: '20px' }}
                          color="#3d3d3d"
                        />
                      ) : (
                        <BiShow
                          style={{ width: '20px', height: '20px' }}
                          color="#3d3d3d"
                        />
                      )}
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </Box>
              <Center>
                {loading ? (
                  <Button isLoading loadingText="Logging in...">
                    Login
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    letterSpacing={1}
                    mt={['1rem', '']}
                    px="4rem"
                    fontSize="1rem"
                    bg="accent"
                    color="white"
                    _hover={{ bg: 'primaryGreen' }}
                    rightIcon={
                      <AiOutlineArrowRight color="#ffffff" size="1.2rem" />
                    }
                  >
                    Log In
                  </Button>
                )}
              </Center>
            </form>
          </Flex>
          <Text textAlign="center" fontSize={['1.1rem', '1.2rem']}>
            {/*eslint-disable-next-line react/no-unescaped-entities */}
            Don't have an account?
          </Text>
          <Text
            textAlign="center"
            fontSize={['1.1rem', '1.2rem']}
            color="primaryGreen"
            fontWeight="600"
          >
            <Link to="/verify">Register</Link>
          </Text>
        </Stack>
      </Flex>
    </>
  );
}
