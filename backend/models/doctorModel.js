import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema(
  {
    doctorName: {
      type: String,
      required: [true, 'please add your name'],
    },

    userName: {
      type: String,
      required: [true, 'please add your username'],
    },

    regNo: {
      type: Number,
      required: [true, 'please add an email'],
    },

    yearOfReg: {
      type: Number,
      required: [true, 'please add your year of registration'],
    },

    medicalCouncil: {
      type: String,
      required: [true, 'please add your medical council'],
    },

    password: {
      type: String,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;
