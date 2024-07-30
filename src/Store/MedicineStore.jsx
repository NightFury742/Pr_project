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

  setName: (value) => {
    set((state) => {
      return {
        ...state,
        Name: value,
      };
    });
  },

  setPatientName: (value) => {
    set((state) => {
      return {
        ...state,
        PatientName: value,
      };
    });
  },

  setGender: (value) => {
    set((state) => {
      return {
        ...state,
        Gender: value,
      };
    });
  },

  setAge: (value) => {
    set((state) => {
      return {
        ...state,
        Age: value,
      };
    });
  },

  setComplaint: (value) => {
    set((state) => {
      return {
        ...state,
        Complaint: value,
      };
    });
  },

  setDiagnosis: (value) => {
    set((state) => {
      return {
        ...state,
        Diagnosis: value,
      };
    });
  },

  setQrData: (value) => {
    set((state) => {
      return {
        ...state,
        QrData: value,
      };
    });
  },

  setMedicines: (value, index) => {
    set((state) => {
      return {
        ...state,
        medicines: state.medicines.map((medicine, i) =>
          i === index ? value : medicine
        ),
      };
    });
  },

  addMedicine: () => {
    set((state) => {
      return {
        ...state,
        medicines: [
          ...state.medicines,
          { medicineName: '', dosage: '', method: '' },
        ],
      };
    });
  },

  removeMedicine: (index) => {
    set((state) => {
      return {
        ...state,
        medicines: state.medicines.filter((_, i) => i !== index),
      };
    });
  },
}));

export default useMedicineStore;
