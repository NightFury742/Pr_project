import { Text, Flex, Button, Image, SimpleGrid, Box } from '@chakra-ui/react';

function PrintPreview3() {
  const data = {
    Name: 'Dr. Anil Mehta',
    PatientName: 'Suresh Singh',
    Gender: 'male',
    Age: '60',
    Complaint: 'Joint Pain, Inflammation',
    Diagnosis: 'Osteoarthritis',
    medicines: [
      {
        medicineName: 'Ibuprofen',
        dosage: 'TDS',
        method: 'PS',
      },
      {
        medicineName: 'Paracetamol',
        dosage: 'BD',
        method: 'HS',
      },
      {
        medicineName: 'ORS',
        dosage: 'TDS',
        method: 'PS',
      },
    ],
  };

  const { medicines, Name, PatientName, Gender, Age, Complaint, Diagnosis } =
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

export default PrintPreview3;
