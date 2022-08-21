// conexãoDB
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connect } from './src/database/dbConnect.js';
import router from './src/routes.js';
import morgan from 'morgan';

const initializeApp = () => {
    connect();
    const app = express();

    app.use(cors());

    app.use(express.json());

    app.use(morgan('dev'))

    app.use('/', router);

    return app;
};

export const app = initializeApp();
