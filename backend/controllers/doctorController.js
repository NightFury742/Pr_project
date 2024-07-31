import asyncHandler from 'express-async-handler';
import Doctor from '../models/doctorModel.js';
import axios from 'axios';

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};
const verifyDoctorId = async (responseId) => {
  const options = {
    method: 'GET',
    url: 'https://mci-nmc-doctor-verification.p.rapidapi.com/v3/tasks',
    params: {
      request_id: responseId,
    },
    headers: {
      'x-rapidapi-key': 'c2a63b7b7emsha7166abd17b1a71p18999fjsn14ed6561846e',
      'x-rapidapi-host': 'mci-nmc-doctor-verification.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    return err;
  }
};

const postVerifyData = async (regNo, yearOfReg, medicalCouncil) => {
  const options = {
    method: 'POST',
    url: 'https://mci-nmc-doctor-verification.p.rapidapi.com/v3/tasks/async/verify_with_source/nmc_doctor',
    headers: {
      'x-rapidapi-key': 'c2a63b7b7emsha7166abd17b1a71p18999fjsn14ed6561846e',
      'x-rapidapi-host': 'mci-nmc-doctor-verification.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    data: {
      task_id: '74f4c926-250c-43ca-9c53-453e87ceacd1',
      group_id: '8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e',
      data: {
        registration_no: regNo,
        year_of_registration: yearOfReg,
        council_name: medicalCouncil,
      },
    },
  };

  try {
    const response = await axios.request(options);
    await delay(10000);
    const isVerified = await verifyDoctorId(response.data.request_id);

    return isVerified;
  } catch (err) {
    // return err;
  }
};
// ADD CHECK FOR AREADY VERIFEID DOCTORS, UPDATE IT IN DB
//  add doctor name to lcoal storage afeter login/signup

//  verfiy doctor
// POST /doctor
// pulic
const verifyDoctor = async (req, res) => {
  const { doctorName, regNo, yearOfReg, medicalCouncil } = req.body;

  if (!doctorName || !regNo || !yearOfReg || !medicalCouncil) {
    res.status(400);
    console.log(req.body);
    throw new Error('please add all fields!');
  }

  const isDoctor = await postVerifyData(regNo, yearOfReg, medicalCouncil);

  if (isDoctor[0].result.source_output.status === 'id_found') {
    res.status(200).json({
      verified: true,
    });
  } else {
    res.status(400);
    throw new Error('invalid doctor data');
  }
};

// register doctor
// POST /doctor/regsiter
// pulic
const registerDoctor = asyncHandler(async (req, res) => {
  const { doctorName, regNo, yearOfReg, medicalCouncil, userName, password } =
    req.body;

  console.log('Received data:', req.body);

  if (
    !doctorName ||
    !regNo ||
    !yearOfReg ||
    !medicalCouncil ||
    !userName ||
    !password
  ) {
    res.status(400);
    throw new Error('Please add all fields!');
  }

  const prevUser = await Doctor.findOne({ userName });
  if (prevUser) {
    res.status(400);
    throw new Error('User already exists!');
  }

  let doctor = new Doctor({
    doctorName,
    userName,
    regNo,
    yearOfReg,
    medicalCouncil,
    password,
  });

  try {
    const savedDoctor = await doctor.save();
    console.log('Doctor saved:', savedDoctor);

    res.status(201).json({
      _id: savedDoctor._id,
      doctorName: savedDoctor.doctorName,
      regNo: savedDoctor.regNo,
      yearOfReg: savedDoctor.yearOfReg,
      medicalCouncil: savedDoctor.medicalCouncil,
      userName: savedDoctor.userName,
    });
  } catch (error) {
    console.error('Error saving doctor:', error);
    res.status(500).json({ message: 'Error saving doctor' });
  }
});

//login doctor
// @route POST /doctor/login
// public
const loginDoctor = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  const doctor = await Doctor.findOne({ userName });

  if (doctor && doctor.password == password) {
    res.status(200).json({
      _id: doctor._id,
      doctorName: doctor.doctorName,
      userName: doctor.userName,
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials!');
  }
});

export { verifyDoctor, loginDoctor, registerDoctor };
