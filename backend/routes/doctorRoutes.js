import express from 'express';
import {
  verifyDoctor,
  loginDoctor,
  registerDoctor,
} from '../controllers/doctorController.js';

const doctorRoutes = express.Router();

doctorRoutes.post('/', verifyDoctor);
doctorRoutes.post('/login', loginDoctor);
doctorRoutes.post('/register', registerDoctor);

export default doctorRoutes;
