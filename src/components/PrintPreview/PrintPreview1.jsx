import { Text, Flex, Button, Image, SimpleGrid, Box } from '@chakra-ui/react';

function PrintPreview1() {
  const data = {
    Name: 'Dr. Ramesh Verma',
    PatientName: 'Rajesh Kumar',
    Gender: 'male',
    Age: '45',
    Complaint: 'Fever, Body Ache',
    Diagnosis: 'Viral Fever',
    medicines: [
      {
        medicineName: 'Paracetamol',
        dosage: 'BD',
        method: 'SOS',
      },
      {
        medicineName: 'Ibuprofen',
        dosage: 'TDS',
        method: 'PS',
      },
      {
        medicineName: 'ORS',
        dosage: 'TDS',
        method: 'PS',
      },
    ],
  };

  const { Name, PatientName, Gender, Age, Complaint, Diagnosis, medicines } =
    data;
  const QrData =
    'data:image/png;base64,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';
  return (
    <>
      <Flex direction="column" pl="5rem" pr="5rem" mt="3rem">
        <Text
          color="primaryGreen"
          fontSize={['1.1rem', '1.8rem']}
          fontWeight="550"
          mb="2.5rem"
        >
          YOUR PRESCRIPTION
        </Text>
        <Text
          color="primaryGreen"
          fontSize={['1.1rem', '1.5rem']}
          fontWeight="550"
          mb="1.5rem"
        >
          Patient info
        </Text>
        <Flex justifyContent="space-between">
          <Flex direction="column" alignItems="left" gap="0.5rem">
            <Flex>
              <Text>NAME:</Text>
              <Text>{Name}</Text>
            </Flex>

            <Flex>
              <Text>{`PATIENT'S NAME:`}</Text>
              <Text>{PatientName}</Text>
            </Flex>

            <Flex>
              <Text>GENDER:</Text>
              <Text>{Gender}</Text>
            </Flex>

            <Flex>
              <Text>AGE:</Text>
              <Text>{Age}</Text>
            </Flex>

            <Flex>
              <Text>COMPLAINT:</Text>
              <Text>{Complaint}</Text>
            </Flex>
            <Flex>
              <Text>DIAGNOSIS:</Text>
              <Text>{Diagnosis}</Text>
            </Flex>
          </Flex>
          <Image src={QrData} alt="QR Code" boxSize="15rem" />
        </Flex>
        <Box mb="3rem" mt="1rem">
          <Text
            color="primaryGreen"
            fontSize={['1.1rem', '1.5rem']}
            fontWeight="550"
            mb="1.5rem"
          >
            Medicines
          </Text>
          {medicines.map((val, index) => (
            <Flex direction="column" key={index} mb="1rem">
              <Flex>
                <Text>MEDICINE:</Text>
                <Text>{val.medicineName}</Text>
              </Flex>
              <Flex gap="3rem">
                <Flex>
                  <Text>DOSAGE:</Text>
                  <Text>{val.dosage}</Text>
                </Flex>
                <Flex>
                  <Text>METHOD:</Text>
                  <Text>{val.method}</Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Box>

        <Flex direction="column" mb="2rem">
          <SimpleGrid columns={3} spacingX="1" spacingY="0.3rem">
            <Flex>
              <Text fontSize="sm">OD:</Text>
              <Text fontSize="sm">Once a day</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm">BD:</Text>
              <Text fontSize="sm">Twice a day</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm">TDS:</Text>
              <Text fontSize="sm">Thrice a day</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm">QID:</Text>
              <Text fontSize="sm">Four times a day</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm">HS:</Text>
              <Text fontSize="sm">At night before sleep</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm">SOS:</Text>
              <Text fontSize="sm">Take as needed</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm">LA:</Text>
              <Text fontSize="sm">Local application</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm">AC:</Text>
              <Text fontSize="sm">Before meal</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm">PC:</Text>
              <Text fontSize="sm">After meal</Text>
            </Flex>
          </SimpleGrid>
        </Flex>
        <Flex mr="0" ml="auto">
          <Button
            className="no-print"
            width="5rem"
            bg="primaryGreen"
            color="white"
            onClick={() => {
              window.print();
            }}
          >
            Print
          </Button>
        </Flex>
      </Flex>
      <style>{`
        @media print {
          .no-print {
            display: none;
          }
          body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }
          @page {
            size: auto;
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}

export default PrintPreview1;
