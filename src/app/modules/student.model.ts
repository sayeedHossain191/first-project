import { Schema, model, connect } from 'mongoose';
import { Guardian, LocalGuardian, Student, userName } from './student/student.interface';

const userNameSchema=new Schema<userName>({
    firstName:{
        type:String,
        required:[true,"first name is required"]
    },
    middleName:{
        type:String
    },
    lastName:{
        type:String,
        required:[true,"last name is required"]
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
id:{type:String,
    required:true,
    unique:true
},
name:{
    type:userNameSchema,
    required:true
},
gender:{
    type:String,
    enum:{
        values:["male","female","others"],
        message:"{VALUE} is not valid"
    },
    required:true
},
dateOfBirth:{type:String},
email:{type:String,required:true},
contactNumber:{type:String,required:true},
emergencyContact:{type:String,required:true},
bloodGroup:{
    type:String,
    enum:["A+","A-"]
},
presentAddress:{
    type:String,
    required:true},
permanentAddress:{
    type:String,
    required:true},
guardian:{
    type:guardianSchema,
    required:true
},
localGuardian:{
    type:localGuardianSchema,
    required:true
},
profileImage:{type:String},
isActive:{
    type:String,
    enum:["active","blocked"],
    default:"active"
}

})

export const StudentModel=model<Student>('Student',studentSchema)