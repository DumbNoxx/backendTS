import express, { Request, Response } from 'express';
const app: express.Application = express();

import { Port } from "./types/Port.type";



// Rutas
import routerAPI from './routes/routerAPI';
app.use('/api', routerAPI);

import routerSendEmail from './routes/routerSendEmail';
app.use('/api/send-email', routerSendEmail);

import routerGetEmail from './routes/getEmail';
app.use('/api/get-email', routerGetEmail);

import routerSendEmal from './routes/routerSendEmailPublice';
app.use("/api/send-publice", routerSendEmal);

app.get('/', (req: Request, res: Response) => {
    res.send("Hola mundo!!!!");
});

import Connetion from './model/mConnection';


const PORT: Port = process.env.PORT  || 3000;

app.listen(PORT, () => {
    Connetion.testConnection();
    console.log(`Server is running in http://localhost:${PORT}`);
});