import { create } from 'zustand';

const useMedicineStore = create((set) => ({
  medicines: [],

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
