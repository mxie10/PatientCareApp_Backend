import { PatientSchema } from '../models/patientSchemas.js';

export const getPatients = async (req,res) => {
    try{
        const patients = await PatientSchema.find();
        res.status(200).json(patients);
    }catch(error){
        res.status(404).json({message:error.message});
    }
}

export const addPatients = async (req,res) => {
    const patient = req.body;
    console.log(patient)
    const newPatient = new PatientSchema(patient);
    try{
        await newPatient.save();
        res.status(201).json(newPatient);
    }catch(error){
        res.status(409).json({message:error.message});
    }
}
