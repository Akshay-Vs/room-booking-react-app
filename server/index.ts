import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import connectDB from './config/db';
import logger from './utils/logger';

import userRoutes from './routes/userRoutes';

import { errorHandler, notFound } from './middleware/errorMiddleware';
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URI;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/users', userRoutes);

// middleware
app.use(errorHandler);
app.use(notFound);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  logger(`Server is running on port ${PORT}`, 'info');
  logger(`Connecting to MongoDB`, 'info');
  try {
    connectDB(MONGO_URL);
  } catch (error) {
    logger(`Error: ${error}`, 'error');
    process.exit(1);
  }
});
