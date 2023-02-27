import { PatientSchema } from '../models/patientSchemas.js';

export const getPatients = async (req,res) => {
    try{
        const patients = await PatientSchema.find();
        res.status(200).json(patients);
    }catch(error){
        res.status(404).json({message:error.message});
    }
}
