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
  Select,
} from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import axios from 'axios';
import useMedicineStore from '../../Store/MedicineStore';
import Lottie from 'lottie-react';
import docAnimation from '../../animations/docAnimation.json';
import { medicalCouncils } from './medicalCouncils.jsx';

export default function VerifyForm() {
  const [loading, setLoading] = useState(false);

  const { valueSetter, addVerification } = useMedicineStore((state) => ({
    valueSetter: state.valueSetter,
    addVerification: state.addVerification,
  }));

  const [verifyData, setVerifyData] = useState({
    DoctorName: '',
    RegNo: '',
    YearOfReg: '',
    MedicalCouncil: '',
  });

  const { DoctorName, RegNo, YearOfReg, MedicalCouncil } = verifyData;

  const navigate = useNavigate();
  const toast = useToast();

  const onChange = (e) => {
    setVerifyData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  async function makeVerifyRequest() {
    const response = await axios.post(
      'http://localhost:5000/doctor',
      {
        doctorName: DoctorName,
        regNo: RegNo,
        yearOfReg: YearOfReg,
        medicalCouncil: MedicalCouncil,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!(DoctorName && RegNo && YearOfReg && MedicalCouncil)) {
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
    valueSetter(DoctorName, 'doctorName');
    valueSetter(RegNo, 'regNo');
    valueSetter(YearOfReg, 'yearOfReg');
    valueSetter(MedicalCouncil, 'medicalCouncil');

    try {
      const response = await makeVerifyRequest();

      if (response.verified) {
        addVerification();
        toast({
          title: 'Verified!',
          status: 'info',
          duration: 2000,
          isClosable: true,
          position: 'top',
        });

        localStorage.setItem('isVerified', true);
        navigate('/signup');
      } else {
        throw new Error('Verification failed');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Not verified',
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
            fontSize={['1.7rem', '2.2rem']}
            fontWeight="600"
            mb="1rem"
          >
            Register With Us
          </Text>
          <Text
            textAlign="center"
            fontSize={['1.7rem', '1.5rem']}
            fontWeight="450"
            mb="1rem"
          >
            Please verify that you are a doctor
          </Text>
          <Flex
            direction="column"
            border="2px solid #005856"
            w={['20rem', '40rem']}
            px={['1rem', '2rem']}
            py={['1rem', '2rem']}
            borderRadius="0.8rem"
            mb="1rem"
          >
            <form onSubmit={onSubmit}>
              <Flex gap="2rem">
                <Box mb={['1rem', '2rem']}>
                  <Text mb="0.5rem" fontSize={['1.1rem', '1.2rem']}>
                    Name:
                  </Text>
                  <Box bg="#ffffff" borderRadius="0.4rem">
                    <Input
                      type="text"
                      focusBorderColor="primaryGreen"
                      bg="#ecedf6"
                      id="DoctorName"
                      name="DoctorName"
                      value={DoctorName}
                      placeholder="Name..."
                      onChange={onChange}
                    />
                  </Box>
                </Box>
                <Box mb={['1rem', '2rem']}>
                  <Text mb="0.5rem" fontSize={['1.1rem', '1.2rem']}>
                    Registration Number:
                  </Text>
                  <Box bg="#ffffff" borderRadius="0.4rem">
                    <Input
                      type="number"
                      focusBorderColor="primaryGreen"
                      bg="#ecedf6"
                      id="RegNo"
                      name="RegNo"
                      value={RegNo}
                      placeholder="registration no..."
                      onChange={onChange}
                    />
                  </Box>
                </Box>
              </Flex>
              <Box mb={['1rem', '2rem']}>
                <Text mb="0.5rem" fontSize={['1.1rem', '1.2rem']}>
                  Year Of Registration:
                </Text>
                <Box bg="#ffffff" borderRadius="0.4rem">
                  <Input
                    type="number"
                    focusBorderColor="primaryGreen"
                    bg="#ecedf6"
                    id="YearOfReg"
                    name="YearOfReg"
                    value={YearOfReg}
                    placeholder="Year Of Registration..."
                    onChange={onChange}
                  />
                </Box>
              </Box>
              <Box mb={['1rem', '2rem']}>
                <Text mb="0.5rem" fontSize={['1.1rem', '1.2rem']}>
                  State Medical Council
                </Text>
                <Box
                  bg="#ffffff"
                  borderRadius="0.4rem"
                  id="MedicalCouncil"
                  name="MedicalCouncil"
                  value={MedicalCouncil}
                  onChange={onChange}
                >
                  <Select
                    placeholder="Select option"
                    id="MedicalCouncil"
                    name="MedicalCouncil"
                    value={MedicalCouncil}
                  >
                    {medicalCouncils.map((val, index) => {
                      return (
                        <option key={index} value={val.name}>
                          {val.name}
                        </option>
                      );
                    })}
                  </Select>
                </Box>
              </Box>

              <Center>
                {loading ? (
                  <Button isLoading loadingText="Verifying...">
                    Verifying
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
                    Verify Details
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
