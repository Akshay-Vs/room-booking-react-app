import mongoose from 'mongoose';
import logger from '../utils/logger';

const connectDB = async (URI: string) => {
  try {
    const connection = await mongoose.connect(URI);
    logger(
      `MongoDB Connected at ${connection.connection.host}:${connection.connection.port}`,
      'success'
    );
  } catch (error) {
    logger(`Error: ${error}`, 'error');
    process.exit(1);
  }
};

export default connectDB;
