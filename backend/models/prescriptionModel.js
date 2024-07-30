import mongoose from 'mongoose';

const prescriptionSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true],
    },

    name: {
      type: String,
      required: [true],
    },

    patientName: {
      type: String,
      required: [true],
    },

    gender: {
      type: String,
      required: [true],
    },

    age: {
      type: Number,
      required: [true],
    },

    complaint: {
      type: String,
      required: [true],
    },

    diagnosis: {
      type: String,
      required: [true],
    },

    medicines: [
      {
        medicineName: {
          type: String,
          required: [true],
        },
        dosage: {
          type: String,
          required: [true],
        },
        method: {
          type: String,
          required: [true],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Prescription = mongoose.model('Prescription', prescriptionSchema);

export default Prescription;
