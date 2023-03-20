import express from 'express';
import { getPatients } from '../controllers/patients.js';
import { addPatients } from '../controllers/patients.js';
import { createClinicalRecord } from '../controllers/patients.js';
import { getClinicalDataById } from '../controllers/patients.js';
import { getPatientByName } from '../controllers/patients.js';
import { updatePatientInfo } from '../controllers/patients.js';

const router = express.Router()

router.get('/',getPatients);
router.get('/clinicalInfo',getClinicalDataById);
router.get('/getPatientByName',getPatientByName);
router.post('/',addPatients);
router.post('/clinicalInfo',createClinicalRecord);
router.patch('/updatePatientInfo',updatePatientInfo);

export default router;

