import { PatientSchema, PatientClinicalRecordSchema } from '../models/patientSchemas.js';
import mongoose from 'mongoose';

const db = mongoose.connection;

export const getPatients = async (req, res) => {
    try {
        const patients = await PatientSchema.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getClinicalDataById = async (req, res) => {
    try{
        const records = await PatientClinicalRecordSchema.find({patientId:req.query.id});
        res.status(200).json(records);
    }catch(err){
        res.status(404).json({ message: error.message });
    }
}

export const getPatientByName = async (req,res) => {
    try{
        console.log(req.query.firstName);
        const patients = await PatientSchema.find({firstName:req.query.firstName});
        res.status(200).json(patients);
    }catch(error){
        res.status(404).json({ message: error.message });
    }
}

export const getPatientByID = async (req,res) => {
    try{
        console.log(req.query.id);
        const patients = await PatientSchema.find({_id:req.query.id});
        res.status(200).json(patients);
    }catch(error){
        res.status(404).json({ message: error.message });
    }
}


export const getCriticalPatient = async (req,res) => {
    try{
        const patients = await PatientClinicalRecordSchema.find({isInCriticalCondition:req.query.condition});
        console.log(patients);
        res.status(200).json(patients);
    }catch(error){
        res.status(404).json({ message: error.message });
    }
}

export const addPatients = async (req, res) => {
    const patient = req.body;
    const newPatient = new PatientSchema(patient);
    try {
        await newPatient.save();
        res.status(200).json(newPatient);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const createClinicalRecord = async (req, res) => {
    const clinicalRecord = req.body;
    console.log(clinicalRecord);
    const newClinicalRecord = new PatientClinicalRecordSchema(clinicalRecord);
    try {
        await newClinicalRecord.save();
        res.status(200).json(newClinicalRecord);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePatientInfo = async (req,res) => {
    const {id:_id} = req.query;
    const patientInfo = req.body;
    console.log(patientInfo);
    try{
        const updatedPost = await PatientSchema.findByIdAndUpdate(_id, {...patientInfo,_id},{new:true});
        res.status(200).json(updatedPost);
    }catch(error){
        res.status(409).json({ message: error.message });
    }
}
