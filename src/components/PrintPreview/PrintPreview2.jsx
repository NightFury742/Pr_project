import { Text, Flex, Button, Image, SimpleGrid, Box } from '@chakra-ui/react';

function PrintPreview2() {
  const data = {
    Name: 'Dr. Suman Roy',
    PatientName: 'Meena Gupta',
    Gender: 'female',
    Age: '30',
    Complaint: 'Gastritis, Stomach Pain',
    Diagnosis: 'Acute Gastritis',
    medicines: [
      {
        medicineName: 'Pantoprazole',
        dosage: 'OD',
        method: 'AC',
      },
      {
        medicineName: 'Paracetamol',
        dosage: 'BD',
        method: 'SOS',
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

export default PrintPreview2;
