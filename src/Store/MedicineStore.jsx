import { create } from 'zustand';

const useMedicineStore = create((set) => ({
  medicines: [],
  Name: '',
  PatientName: '',
  Gender: '',
  Age: '',
  Complaint: '',
  Diagnosis: '',
  QrData: '',
  doctorName: '',
  regNo: '',
  yearOfReg: '',
  medicalCouncil: '',
  userName: '',
  auth: false,
  isVerified: false,

  valueSetter: (value, variable) => {
    set((state) => ({
      ...state,
      [variable]: value,
    }));
  },

  setName: (value) => {
    set((state) => ({
      ...state,
      Name: value,
    }));
  },

  setPatientName: (value) => {
    set((state) => ({
      ...state,
      PatientName: value,
    }));
  },

  setGender: (value) => {
    set((state) => ({
      ...state,
      Gender: value,
    }));
  },

  setAge: (value) => {
    set((state) => ({
      ...state,
      Age: value,
    }));
  },

  setComplaint: (value) => {
    set((state) => ({
      ...state,
      Complaint: value,
    }));
  },

  setDiagnosis: (value) => {
    set((state) => ({
      ...state,
      Diagnosis: value,
    }));
  },

  setQrData: (value) => {
    set((state) => ({
      ...state,
      QrData: value,
    }));
  },

  setDoctorName: (value) => {
    set((state) => ({
      ...state,
      doctorName: value,
    }));
  },

  setRegNo: (value) => {
    set((state) => ({
      ...state,
      regNo: value,
    }));
  },

  setYearOfReg: (value) => {
    set((state) => ({
      ...state,
      yearOfReg: value,
    }));
  },

  setMedicalCouncil: (value) => {
    set((state) => ({
      ...state,
      medicalCouncil: value,
    }));
  },

  setUserName: (value) => {
    set((state) => ({
      ...state,
      userName: value,
    }));
  },

  setMedicines: (value, index) => {
    set((state) => ({
      ...state,
      medicines: state.medicines.map((medicine, i) =>
        i === index ? value : medicine
      ),
    }));
  },

  addMedicine: () => {
    set((state) => ({
      ...state,
      medicines: [
        ...state.medicines,
        { medicineName: '', dosage: '', method: '' },
      ],
    }));
  },

  removeMedicine: (index) => {
    set((state) => ({
      ...state,
      medicines: state.medicines.filter((_, i) => i !== index),
    }));
  },

  addAuth: () => {
    set((state) => ({
      ...state,
      auth: true,
    }));
  },

  removeAuth: () => {
    set((state) => ({
      ...state,
      auth: false,
    }));
  },

  removeVerification: () => {
    set((state) => ({
      ...state,
      isVerified: false,
    }));
  },

  addVerification: () => {
    set((state) => ({
      ...state,
      isVerified: true,
    }));
  },
}));

export default useMedicineStore;
