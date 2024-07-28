import { Text, Flex, Select, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import useMedicineStore from '../../Store/MedicineStore';

// eslint-disable-next-line react/prop-types
function MedicineForm({ index }) {
  const { medicines, setMedicines } = useMedicineStore((state) => ({
    setMedicines: state.setMedicines,
    medicines: state.medicines,
  }));

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
    <Flex direction="column">
      <Flex direction="column">
        <Text>Medicine Name</Text>
        <Select
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
  );
}
//  add remove medicine button
export default MedicineForm;
