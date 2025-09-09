import {StudentPresence} from  '../models/studentPresence.model' 

  export const  studentpresenceitems: StudentPresence[] = [
    {
      id:1,
      studentId:1,
      classId:1,
      studentName:'koen',
      courseId:1,
      courseStartDateTime : new Date(),
      presence : false,
      toLate:0,
      absenceReason : 1,
      comment : '',
      createByTeacherId: 1
    },
    {
      id:2,
      studentId:1,
      classId:2,
      studentName:'Jan',
      courseId:1,
      courseStartDateTime : new Date(),
      presence : false,
      absenceReason :1,
      comment : '',
      createByTeacherId: 1
    },
    {
      id:3,
      studentId:3,
      classId:1,
      studentName:'Maria',
      courseId:1,
      courseStartDateTime : new Date(),
      presence : false,
      absenceReason : 1,
      comment : '',
      createByTeacherId: 1
    },
    {
      id:4,
      studentId:4,
      classId:1,
      studentName:'Johan',
      courseId:1,
      courseStartDateTime : new Date(),
      presence : false,
      absenceReason : 1,
      comment : '',
      createByTeacherId: 1
    },
    {
      id:5,
      studentId:5,
      classId:1,
      studentName:'Mark',
      courseId:1,
      courseStartDateTime : new Date(),
      presence : false,
      absenceReason : 1,
      comment : '',
      createByTeacherId: 1
    },
    {
      id:5,
      studentId:5,
      classId:1,
      studentName:'Lili',
      courseId:1,
      courseStartDateTime : new Date(),
      presence : false,
      absenceReason : 1,
      comment : '',
      createByTeacherId: 1
    },
  
]