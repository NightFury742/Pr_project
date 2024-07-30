import express from 'express';
import cors from 'cors';
import doctorRoutes from './routes/doctorRoutes.js';
// import prescriptionRoutes from './routes/prescriptionRoutes.js';
import { connectDb } from './config/db.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 5000;
connectDb();

app.get('/', (req, res) => {
  res.send('APD server running');
});

app.use('/doctor', doctorRoutes);
// app.use('/prescription', prescriptionRoutes);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
