import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import patientRoutes from './routes/patients.js';
const app = express();

//add prefix to all routes
//because we are going to send images, so need to set the limit size 
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
app.use('/',patientRoutes);

// const CONNECTION_URL = 'mongodb+srv://mxie10:fZiShWOunMcbOVCB@cluster0.tyrc04y.mongodb.net/?retryWrites=true&w=majority';
const CONNECTION_URL =  'mongodb://127.0.0.1:27017/patientCareApp_flutter';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message));
