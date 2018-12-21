import express from 'express';
import router from './router';
import bodyParser from 'body-parser';
import cors from 'cors';
import { logInit, logSave } from './middlewares/log';
import { tokenValidation } from './middlewares/validation';

const app = express();

app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));
app.use(bodyParser.json());
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(tokenValidation);
app.use(logInit);
app.use('/api', router);
app.use(logSave);

export default app;