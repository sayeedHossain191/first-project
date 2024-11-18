import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent=async(req:Request,res:Response)=>{
    try{
        const {student:studentData}=req.body.student;

    // will call service func
const result=await StudentServices.createStudentIntoDB(studentData)


    // send response
    res.status(200).json({
        success:true,
        message: "Student is created successfully",
        data:result
    })
    }catch(err){
console.log(err)
    }
}

const getAllStudent=async (req:Request,res:Response)=>{
try{
    const result = await StudentServices.getAllStudentFromDB()
    res.status(200).json({
        success:true,
        message: "Student is retrieved successfully",
        data:result
    })

}catch(err){
    console.log(err)
}
}

const getSingleStudent=async (req:Request,res:Response)=>{
try{

    const {studentId}=req.params;
    const result = await StudentServices.getSingleStudent(studentId)
    res.status(200).json({
        success:true,
        message: "Student is retrieved successfully",
        data:result
    })

}catch(err){
    console.log(err)
}
}

export const StudentControllers={
    createStudent,
    getAllStudent,
    getSingleStudent
}