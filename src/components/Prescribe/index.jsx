import {
  Text,
  Flex,
  Button,
  Input,
  Select,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import MedicineForm from '../MedicineForm';
import { FiEdit } from 'react-icons/fi';
import useMedicineStore from '../../Store/MedicineStore';

function Prescribe() {
  const { medicines, addMedicine } = useMedicineStore((state) => ({
    medicines: state.medicines,
    addMedicine: state.addMedicine,
  }));

  const [formData, setFormData] = useState({
    name: '',
    patientName: '',
    gender: '',
    age: '',
    complaint: '',
    diagnosis: '',
    // medicines: medicines,
  });

  const { name, patientName, gender, age, complaint, diagnosis } = formData;

  const toast = useToast();

  const onFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isEmptyField = Object.values(formData).some((val) => val === '');
    const isEmptyMedicine = medicines.some((val) =>
      Object.values(val).some((val) => val === '')
    );

    if (isEmptyField || isEmptyMedicine) {
      toast({
        position: 'top',
        title: 'Please fill all fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
        variant: 'subtle',
      });
    }
    console.log(formData);
    console.log(medicines);
  };

  const handleFormReset = () => {
    setFormData({
      name: '',
      patientName: '',
      gender: '',
      age: '',
      complaint: '',
      diagnosis: '',
    });
  };

  return (
    <Flex direction="column">
      <form onSubmit={handleFormSubmit}>
        <Flex>
          <Flex direction="column">
            <Text>Name</Text>
            <Input
              name="name"
              type="text"
              value={name}
              onChange={onFormChange}
            />
          </Flex>

          <Flex direction="column">
            <Text>{`Patient's Name`}</Text>
            <Input
              name="patientName"
              type="text"
              value={patientName}
              onChange={onFormChange}
            />
          </Flex>
        </Flex>

        <Flex>
          <Flex direction="column">
            <Text>Gender</Text>
            <Select
              variant="filled"
              name="gender"
              onChange={onFormChange}
              placeholder="Select gender"
              value={gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </Flex>

          <Flex direction="column">
            <Text>Age</Text>
            <Input
              variant="filled"
              name="age"
              type="number"
              value={age}
              onChange={onFormChange}
              placeholder="Enter age"
            />
          </Flex>
        </Flex>

        <Flex>
          <Flex direction="column">
            <Text>Complaint</Text>
            <Textarea
              name="complaint"
              type="text"
              resize="none"
              value={complaint}
              onChange={onFormChange}
            />
          </Flex>
          <Flex direction="column">
            <Text>Diagnosis</Text>
            <Textarea
              name="diagnosis"
              resize="none"
              type="text"
              value={diagnosis}
              onChange={onFormChange}
            />
          </Flex>
        </Flex>

        {medicines.map((val, index) => (
          <MedicineForm key={index} index={index} />
        ))}

        <Flex>
          <Button
            bg="white"
            color="primaryGreen"
            _hover={{ bg: '#F7F7F7' }}
            boxShadow=" 0px 4px 4px 0px rgba(0,0,0,0.25)"
            onClick={addMedicine}
          >
            <Flex gap="1.5rem" alignItems="center">
              Add Medicine
              <FiEdit size="1.2rem" />
            </Flex>
          </Button>
        </Flex>

        <Flex>
          <Button
            type="submit"
            bg="primaryGreen"
            color="white"
            _hover={{ bg: 'highlightGreen' }}
          >
            Save
          </Button>

          <Button
            bg="#D8374A"
            color="white"
            _hover={{ bg: '#C5394A' }}
            onClick={handleFormReset}
          >
            Cancel
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}

export default Prescribe;
