import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    patientUserName: String,
    firstName: String,
    lastName: String,
    sex: String,
    address: String,
    dateOfBirth: String,
    phoneNumber: String,
    emailAddress: String,
    symptom:String
  })

export const PatientSchema = mongoose.model('PatientSchema',patientSchema);
