import {
  Text,
  Flex,
  Select,
  Radio,
  RadioGroup,
  Stack,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import useMedicineStore from '../../Store/MedicineStore';

// eslint-disable-next-line react/prop-types
function MedicineForm({ index }) {
  const { medicines, setMedicines, removeMedicine } = useMedicineStore(
    (state) => ({
      setMedicines: state.setMedicines,
      medicines: state.medicines,
      removeMedicine: state.removeMedicine,
    })
  );

  const [medicineData, setMedicineData] = useState(
    medicines[index] || {
      medicineName: '',
      dosage: '',
      method: '',
    }
  );

  const handleMedicineChange = (e) => {
    const updatedMedicineData = {
      ...medicineData,
      [e.target.name]: e.target.value,
    };
    setMedicineData(updatedMedicineData);
    setMedicines(updatedMedicineData, index);
    console.log(medicines);
  };

  const handleDosageChange = (val) => {
    const updatedMedicineData = {
      ...medicineData,
      dosage: val,
    };
    setMedicineData(updatedMedicineData);
    setMedicines(updatedMedicineData, index);
    console.log(medicines);
  };

  const handleMethodChange = (val) => {
    const updatedMedicineData = {
      ...medicineData,
      method: val,
    };
    setMedicineData(updatedMedicineData);
    setMedicines(updatedMedicineData, index);
    console.log(medicines);
  };

  const { medicineName, dosage, method } = medicineData;

  return (
    <Flex>
      <Flex direction="column">
        <Flex direction="column">
          <Text>Medicine Name</Text>
          <Select
            maxW="13rem"
            placeholder="Select Medicine"
            name="medicineName"
            value={medicineName}
            onChange={handleMedicineChange}
            variant="filled"
          >
            <option value="Paracetamol">Paracetamol</option>
            <option value="Pantoprazole">Pantoprazole</option>
            <option value="Ibuprofen">Ibuprofen</option>
            <option value="ORS">ORS</option>
          </Select>
        </Flex>

        <Flex>
          <Flex direction="column">
            <Text>Dosage</Text>
            <RadioGroup
              name="dosage"
              value={dosage}
              onChange={handleDosageChange}
            >
              <Stack spacing={4} direction="row">
                <Radio value="OD">OD</Radio>
                <Radio value="BD">BD</Radio>
                <Radio value="TDS">TDS</Radio>
                <Radio value="QID">QID</Radio>
              </Stack>
            </RadioGroup>
          </Flex>

          <Flex direction="column">
            <Text>Method</Text>
            <RadioGroup
              name="method"
              value={method}
              onChange={handleMethodChange}
            >
              <Stack spacing={4} direction="row">
                <Radio value="OD">HS</Radio>
                <Radio value="BD">SOS</Radio>
                <Radio value="TDS">AC</Radio>
                <Radio value="QID">PS</Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Flex>
      </Flex>
      <Button
        color="#ffffff"
        fontWeight="400"
        fontSize="1.3rem"
        bg="#D8374A"
        _hover={{ bg: '#C5394A' }}
        onClick={() => removeMedicine(index)}
        justifyContent="left"
        gap="0.4rem"
        size="xs"
      >
        <IoClose size="1.5rem" />
      </Button>
    </Flex>
  );
}
export default MedicineForm;
