
export type Guardian={
    fatherName:string
    motherName:string
    fatherContact:string
    motherContact:string
}

export type userName={
    firstName:string
    middleName:string
    lastName:string
}

export type LocalGuardian={
    name:string
    occupation:string
    contact:string 
    address:string
}

export type Student= {
    id:string
    name:userName
    gender:"male"|"female"
    dateOfBirth?:string
    email: string;
    avatar?: string;
    contactNumber:string
    emergencyContact:string
    bloodGroup?:"A+"|"A-"
    presentAddress:string
    permanentAddress:string
    guardian:Guardian
    localGuardian:LocalGuardian
    profileImage?:string
    isActive:"active"|"inactive"
  }