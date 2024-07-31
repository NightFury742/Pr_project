import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  useToast,
  Button,
  Text,
  Flex,
  Stack,
  Box,
  Center,
  Input,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import { BiShow, BiHide } from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import axios from 'axios';
import useMedicineStore from '../../Store/MedicineStore';
import docAnimation from '../../animations/docAnimation.json';
import Lottie from 'lottie-react';

export default function SignupForm() {
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [signupData, setSignupData] = useState({
    UserName: '',
    password: '',
    confirmPassword: '',
  });
  const { UserName, password, confirmPassword } = signupData;

  const { addAuth, valueSetter, doctorName, regNo, yearOfReg, medicalCouncil } =
    useMedicineStore((state) => ({
      addAuth: state.addAuth,
      valueSetter: state.valueSetter,
      doctorName: state.doctorName,
      regNo: state.regNo,
      yearOfReg: state.yearOfReg,
      medicalCouncil: state.medicalCouncil,
    }));

  const navigate = useNavigate();
  const toast = useToast();

  const onChange = (e) => {
    setSignupData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  async function makeRegisterRequest() {
    const response = await axios.post(
      'http://localhost:5000/doctor/register',
      {
        doctorName: doctorName,
        regNo: regNo,
        yearOfReg: yearOfReg,
        medicalCouncil: medicalCouncil,
        userName: UserName,
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
    if (!(UserName || password || confirmPassword)) {
      toast({
        title: 'Incomplete Entries',
        description: 'Please enter all the fields',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
      return;
    }
    setLoading(true);
    try {
      await makeRegisterRequest();

      addAuth();
      valueSetter(UserName, 'userName');
      localStorage.setItem('userName', UserName);
      toast({
        title: 'Signed up!',
        description: `Welcome ${doctorName}`,
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
      navigate('/doctor');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast({
        title: 'Error',
        // description: 'Not registered',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
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
            fontSize={['1.7rem', '2.2rem']}
            fontWeight="600"
            mb="1rem"
          >
            Register With Us
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
              <Flex gap="2rem">
                <Box mb={['1rem', '2rem']}>
                  <Text mb="0.5rem" fontSize={['1.1rem', '1.2rem']}>
                    Username:
                  </Text>
                  <Box bg="#ffffff" borderRadius="0.4rem">
                    <Input
                      type="text"
                      focusBorderColor="primaryGreen"
                      bg="#ecedf6"
                      id="UserName"
                      name="UserName"
                      value={UserName}
                      placeholder="Username..."
                      onChange={onChange}
                    />
                  </Box>
                </Box>
              </Flex>

              <Box mb={['1rem', '2rem']}>
                <Text mb="0.5rem" fontSize={['1.1rem', '1.2rem']}>
                  Password:
                </Text>
                <Box bg="#ffffff" borderRadius="0.4rem">
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      focusBorderColor="primaryGreen"
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
              <Box mb={['1rem', '2rem']}>
                <Text mb="0.5rem" fontSize={['1.1rem', '1.2rem']}>
                  Confirm Password:{' '}
                </Text>
                <Box bg="#ffffff" borderRadius="0.4rem">
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      focusBorderColor="primaryGreen"
                      bg="#ecedf6"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      placeholder="Confirm Password..."
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
                  <Button isLoading loadingText="Creating account...">
                    Create Account
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
                    _hover={{
                      bg: 'primaryGreen',
                    }}
                    rightIcon={
                      <AiOutlineArrowRight color="#ffffff" size="1.2rem" />
                    }
                  >
                    Create Account
                  </Button>
                )}
              </Center>
            </form>
          </Flex>
          <Text textAlign="center" fontSize={['1.1rem', '1.2rem']}>
            Already have an account?
          </Text>
          <Text
            textAlign="center"
            fontSize={['1.1rem', '1.2rem']}
            color="primaryGreen"
            fontWeight="600"
          >
            <Link to="/login">Log In Now</Link>
          </Text>
        </Stack>
      </Flex>
    </>
  );
}
