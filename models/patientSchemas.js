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


  const patientClinicalRecordSchema = new mongoose.Schema({
      patientId: String,
      bloodPressure: String,
      repositoryRate: String,
      bloodOxygenLevel: String,
      heartBeatRate: String,
      isInCriticalCondition: String,
      date:String,
      comment: String
  })

export const PatientSchema = mongoose.model('PatientSchema',patientSchema);
export const PatientClinicalRecordSchema = mongoose.model('PatientClinicalRecordSchema',patientClinicalRecordSchema);
