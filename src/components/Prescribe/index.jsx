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
import QRCode from 'qrcode';
import { useNavigate } from 'react-router-dom';

function Prescribe() {
  const {
    medicines,
    addMedicine,
    removeMedicine,
    setName,
    setPatientName,
    setGender,
    setAge,
    setComplaint,
    setDiagnosis,
    setQrData,
  } = useMedicineStore((state) => ({
    medicines: state.medicines,
    addMedicine: state.addMedicine,
    removeMedicine: state.removeMedicine,
    QrData: state.QrData,
    setName: state.setName,
    setPatientName: state.setPatientName,
    setGender: state.setGender,
    setAge: state.setAge,
    setComplaint: state.setComplaint,
    setDiagnosis: state.setDiagnosis,
    setQrData: state.setQrData,
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

  const navigate = useNavigate();

  const toast = useToast();

  const generateQR = async (qrData) => {
    try {
      const result = await QRCode.toDataURL(qrData);
      setQrData(result);
    } catch (err) {
      console.error(err);
    }
  };

  const onFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
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
      //   return;
    }

    setName(name);
    setPatientName(patientName);
    setGender(gender);
    setAge(age);
    setComplaint(complaint);
    setDiagnosis(diagnosis);

    const qrData = JSON.stringify({
      ...formData,
      medicines: medicines,
    });

    await generateQR(qrData);
    navigate('/doctor/print');
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
    medicines.forEach((val, index) => {
      removeMedicine(index);
    });
  };

  return (
    <Flex direction="column" pl="7rem">
      <Text
        color="primaryGreen"
        fontSize={['1rem', '2rem']}
        fontWeight="450"
        mb="2rem"
      >
        Create presciprtion
      </Text>
      <form onSubmit={handleFormSubmit}>
        <Flex gap="6rem" mb="2.5rem">
          <Flex direction="column">
            <Text fontWeight="450" fontSize="1.2rem">
              Name
            </Text>
            <Input
              name="name"
              bg="#edf1f7"
              type="text"
              value={name}
              onChange={onFormChange}
            />
          </Flex>

          <Flex direction="column">
            <Text fontWeight="450" fontSize="1.2rem">{`Patient's Name`}</Text>
            <Input
              name="patientName"
              bg="#edf1f7"
              type="text"
              value={patientName}
              onChange={onFormChange}
            />
          </Flex>
        </Flex>

        <Flex gap="6rem" mb="2.5rem">
          <Flex direction="column" maxW="6rem">
            <Text fontWeight="450" fontSize="1.2rem">
              Gender
            </Text>
            <Select
              variant="filled"
              bg="#edf1f7"
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

          <Flex direction="column" maxW="4rem">
            <Text fontWeight="450" fontSize="1.2rem">
              Age
            </Text>
            <Input
              variant="filled"
              name="age"
              bg="#edf1f7"
              type="number"
              value={age}
              onChange={onFormChange}
            />
          </Flex>
        </Flex>

        <Flex gap="6rem" mb="2.5rem">
          <Flex direction="column">
            <Text fontWeight="450" fontSize="1.2rem">
              Complaint
            </Text>
            <Textarea
              name="complaint"
              bg="#edf1f7"
              type="text"
              resize="none"
              value={complaint}
              onChange={onFormChange}
            />
          </Flex>
          <Flex direction="column">
            <Text fontWeight="450" fontSize="1.2rem">
              Diagnosis
            </Text>
            <Textarea
              name="diagnosis"
              resize="none"
              bg="#edf1f7"
              type="text"
              value={diagnosis}
              onChange={onFormChange}
            />
          </Flex>
        </Flex>
        <Flex direction="column">
          {medicines.length > 0 && (
            <Text
              color="primaryGreen"
              fontSize={['1rem', '1.8rem']}
              fontWeight="450"
              mb="1rem"
            >
              Medicines
            </Text>
          )}
          {medicines.map((val, index) => (
            <MedicineForm key={index} index={index} />
          ))}

          <Flex mb="3rem">
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

            <Flex ml="auto" mr="7rem" maxW="100%" gap="1rem">
              <Button
                type="submit"
                bg="primaryGreen"
                color="white"
                _hover={{ bg: 'highlightGreen' }}
                boxShadow=" 0px 4px 4px 0px rgba(0,0,0,0.25)"
              >
                Save
              </Button>

              <Button
                bg="#D8374A"
                color="white"
                _hover={{ bg: '#C5394A' }}
                onClick={handleFormReset}
                boxShadow=" 0px 4px 4px 0px rgba(0,0,0,0.25)"
              >
                Cancel
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
}

export default Prescribe;
