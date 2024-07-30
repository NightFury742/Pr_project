import { Text, Flex, Button, Image, SimpleGrid, Box } from '@chakra-ui/react';
import useMedicineStore from '../../Store/MedicineStore';

function PrintPreview() {
  const {
    medicines,
    Name,
    PatientName,
    Gender,
    Age,
    Complaint,
    Diagnosis,
    QrData,
  } = useMedicineStore((state) => ({
    medicines: state.medicines,
    Name: state.Name,
    PatientName: state.PatientName,
    Gender: state.Gender,
    Age: state.Age,
    Complaint: state.Complaint,
    Diagnosis: state.Diagnosis,
    QrData: state.QrData,
  }));

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

export default PrintPreview;
