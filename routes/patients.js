import express from 'express';
import { getPatients } from '../controllers/patients.js';
import { addPatients } from '../controllers/patients.js';

const router = express.Router()

router.get('/',getPatients);
router.post('/',addPatients)

export default router;

