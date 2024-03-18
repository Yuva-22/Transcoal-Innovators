import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv/config.js'
import {consumerAuthRouter} from './routes/consumerAuthRoutes.js';
import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/consumer', consumerAuthRouter);

const mongodburl = process.env.MONGO_URL
const PORT = process.env.PORT;

mongoose.connect(mongodburl)
.then(() => console.log('Database connected'))
.catch((err) => console.log("Error occurred : ", err));


app.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`);
})