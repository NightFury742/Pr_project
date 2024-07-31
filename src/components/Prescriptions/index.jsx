import { Flex, Text, Button } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Prescriptions() {
  const navigate = useNavigate();

  return (
    <>
      <Flex>
        <Text
          color="primaryGreen"
          pl={['4rem']}
          fontSize={['0.8rem', '1.8rem']}
          fontWeight="300"
          mb="3rem"
        >
          PRESCREPTIONS
        </Text>
      </Flex>
      <Flex direction="column" gap="3rem">
        <Flex zIndex="1" pl={['4rem']}>
          <Flex
            boxShadow=" 0px 4px 4px 0px rgba(0,0,0,0.25)"
            bgColor="primaryGreen"
            h="12.125rem"
            w="9rem"
            borderLeftRadius="1rem"
            flexDirection="column"
            align="center"
          >
            <Flex
              mt="0.7rem"
              h="3.5rem"
              w="3.5rem"
              borderRadius="3.5rem"
              bgColor="grey"
            ></Flex>
            <Flex mt="1rem">
              <Text color="White" fontWeight="500" fontSize="1rem">
                Ramesh Verma
              </Text>
            </Flex>
            <Flex>
              <Text color="White" fontWeight="400" fontSize="0.9rem">
                Age-45 Sex-M
              </Text>
            </Flex>
            <Flex>
              <Text color="White" fontWeight="400" fontSize="0.7rem">
                12/12/2023
              </Text>
            </Flex>
          </Flex>

          <Flex
            boxShadow=" 0px 4px 4px 0px rgba(0,0,0,0.25)"
            h="12.125rem"
            w="31.125rem"
            borderRightRadius="1rem"
            flexDirection="column"
          >
            <Flex pl="1.9rem">
              <Text fontWeight="400" fontSize="1.5rem" pr="16rem">
                Viral Fever
              </Text>
              <FiEdit size="1.5rem" />
              <MdDelete size="1.5rem" />
            </Flex>

            <Flex>
              <Text w="25rem" pl="2rem" pt="0.5rem">
                Fever and Body Ache
              </Text>
            </Flex>

            <Flex px="2rem" pt="1rem">
              <Button
                mr="1.8rem"
                borderColor="primaryGreen"
                borderWidth="2px"
                borderRadius="1.2rem"
              >
                Paracetamol
              </Button>
              <Button
                mr="1.8rem"
                borderColor="primaryGreen"
                borderWidth="2px"
                borderRadius="1.2rem"
              >
                Ibuprofen
              </Button>
              <Button
                mr="1.8rem"
                borderColor="primaryGreen"
                borderWidth="2px"
                borderRadius="1.2rem"
              >
                ORS
              </Button>
            </Flex>
            <Flex mr="0" ml="auto" mt="1rem">
              <Button
                mr="1.8rem"
                borderColor="primaryGreen"
                borderWidth="2px"
                borderRadius="1.2rem"
                onClick={() => {
                  navigate('/doctor/print/2ad3');
                }}
              >
                View More
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex zIndex="1" pl={['4rem']}>
          <Flex
            boxShadow=" 0px 4px 4px 0px rgba(0,0,0,0.25)"
            bgColor="primaryGreen"
            h="12.125rem"
            w="9rem"
            borderLeftRadius="1rem"
            flexDirection="column"
            align="center"
          >
            <Flex
              mt="0.7rem"
              h="3.5rem"
              w="3.5rem"
              borderRadius="3.5rem"
              bgColor="grey"
            ></Flex>
            <Flex mt="1rem">
              <Text color="White" fontWeight="500" fontSize="1rem">
                Meena Gupta
              </Text>
            </Flex>
            <Flex>
              <Text color="White" fontWeight="400" fontSize="0.9rem">
                Age-30 Sex-F
              </Text>
            </Flex>
            <Flex>
              <Text color="White" fontWeight="400" fontSize="0.7rem">
                23/07/2024
              </Text>
            </Flex>
          </Flex>

          <Flex
            boxShadow="0px 2px 3px lightgray"
            h="12.125rem"
            w="31.125rem"
            borderRightRadius="1rem"
            flexDirection="column"
          >
            <Flex pl="1.9rem">
              <Text fontWeight="400" fontSize="1.5rem" pr="16rem">
                Acute Gastritis
              </Text>
              <FiEdit size="1.5rem" />
              <MdDelete size="1.5rem" />
            </Flex>

            <Flex>
              <Text w="25rem" pl="2rem" pt="0.5rem">
                Gastritis, Stomach Pain
              </Text>
            </Flex>

            <Flex px="2rem" pt="1rem">
              <Button
                mr="1.8rem"
                borderColor="primaryGreen"
                borderWidth="2px"
                borderRadius="1.2rem"
              >
                Pantoprazole
              </Button>
              <Button
                mr="1.8rem"
                borderColor="primaryGreen"
                borderWidth="2px"
                borderRadius="1.2rem"
              >
                Paracetamol
              </Button>
            </Flex>
            <Flex mr="0" ml="auto" mt="1rem">
              <Button
                mr="1.8rem"
                borderColor="primaryGreen"
                borderWidth="2px"
                borderRadius="1.2rem"
                onClick={() => {
                  navigate('/doctor/print/332d');
                }}
              >
                View More
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex zIndex="1" pl={['4rem']}>
          <Flex
            boxShadow="0px 2px 3px lightgray"
            bgColor="primaryGreen"
            h="12.125rem"
            w="9rem"
            borderLeftRadius="1rem"
            flexDirection="column"
            align="center"
          >
            <Flex
              mt="0.7rem"
              h="3.5rem"
              w="3.5rem"
              borderRadius="3.5rem"
              bgColor="grey"
            ></Flex>
            <Flex mt="1rem">
              <Text color="White" fontWeight="500" fontSize="1rem">
                Suresh Singh
              </Text>
            </Flex>
            <Flex>
              <Text color="White" fontWeight="400" fontSize="0.9rem">
                Age-60 Sex-M
              </Text>
            </Flex>
            <Flex>
              <Text color="White" fontWeight="400" fontSize="0.7rem">
                12/12/2023
              </Text>
            </Flex>
          </Flex>

          <Flex
            boxShadow="0px 2px 3px lightgray"
            h="12.125rem"
            w="31.125rem"
            borderRightRadius="1rem"
            flexDirection="column"
          >
            <Flex pl="1.9rem">
              <Text fontWeight="400" fontSize="1.5rem" pr="16rem">
                Osteoarthritis
              </Text>
              <FiEdit size="1.5rem" />
              <MdDelete size="1.5rem" />
            </Flex>

            <Flex>
              <Text w="25rem" pl="2rem" pt="0.5rem">
                Joint Pain, Inflammation
              </Text>
            </Flex>

            <Flex px="2rem" pt="1rem">
              <Button
                mr="1.8rem"
                borderColor="primaryGreen"
                borderWidth="2px"
                borderRadius="1.2rem"
              >
                Ibuprofen
              </Button>
              <Button
                mr="1.8rem"
                borderColor="primaryGreen"
                borderWidth="2px"
                borderRadius="1.2rem"
              >
                Paracetamol
              </Button>
              <Button
                mr="1.8rem"
                borderColor="primaryGreen"
                borderWidth="2px"
                borderRadius="1.2rem"
              >
                ORS
              </Button>
            </Flex>
            <Flex mr="0" ml="auto" mt="1rem">
              <Button
                mr="1.8rem"
                borderColor="primaryGreen"
                borderWidth="2px"
                borderRadius="1.2rem"
                onClick={() => {
                  navigate('/doctor/print/4h2f');
                }}
              >
                View More
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Prescriptions;
