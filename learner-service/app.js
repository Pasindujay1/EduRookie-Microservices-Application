import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import { connect } from './config/db_con.js';
import learnerRouter from './routes/Learner.js';

dotenv.config();

const app = express();

//middlewares
app.use(express.json()); //Send respones in json fomrat
app.use(morgan('tiny')); //log requests
app.use(cors());

app.use('/enrollment', learnerRouter);

//default route
app.get('/', (req, res) => {
  res.send('Welcome to the Learner Service');
});

//server configuration
const PORT = process.env.PORT || 9004;

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit the process with failure
  }
});
