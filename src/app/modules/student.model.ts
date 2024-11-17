import { Schema, model, connect } from 'mongoose';
import { Guardian, LocalGuardian, Student, userName } from './student/student.interface';

const userNameSchema=new Schema<userName>({
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String
    },
    lastName:{
        type:String,
        required:true
    },
})

const guardianSchema=new Schema<Guardian>({
    fatherName:{
        type:String,
        required:true
    },
    motherName:{
        type:String,
        required:true
    },
    fatherContact:{
        type:String,
        required:true
    },
    motherContact:{
        type:String,
        required:true
    }
})

const localGuardianSchema=new Schema<LocalGuardian>({
    name:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const studentSchema=new Schema<Student>({
id:{type:String},
name:userNameSchema,
gender:["male","female"],
dateOfBirth:{type:String},
email:{type:String,required:true},
contactNumber:{type:String,required:true},
emergencyContact:{type:String,required:true},
bloodGroup:["A+","A-"],
presentAddress:{type:String,required:true},
permanentAddress:{type:String,required:true},
guardian:guardianSchema,
localGuardian:localGuardianSchema,
profileImage:{type:String},
isActive:["active","inactive"]

})

const Student=model<Student>('Student',studentSchema)