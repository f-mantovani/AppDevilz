import mongoose from 'mongoose';
import logger from '../utils/logger.js';

export const connect = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    logger.info(`Database connected to ${connection.connections[0].name}`)
}

