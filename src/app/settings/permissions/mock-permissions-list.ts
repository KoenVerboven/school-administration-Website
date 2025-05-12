import { Permission } from  '../models/permission.models'

export const permissions: Permission[] =[
    {
        id:1,
        subject : 'students',
        role:'admin',
        readRights:false,
        createRigthst:true,
        updateRights:true,
        deleteRights:true
    },
    {
        id:2,
        subject : 'teachers',
        role:'admin',
        readRights:true,
        createRigthst:false,
        updateRights:true,
        deleteRights:false
    },
     {
        id:3,
        subject : 'users',
        role:'admin',
        readRights:true,
        createRigthst:false,
        updateRights:true,
        deleteRights:false
    },
    {
        id:4,
        subject : 'courses',
        role:'admin',
        readRights:false,
        createRigthst:true,
        updateRights:true,
        deleteRights:false
    },
    {
        id:5,
        subject : 'exams',
        role:'admin',
        readRights:false,
        createRigthst:true,
        updateRights:true,
        deleteRights:false
    },
    {
        id:6,
        subject : 'examen results',
        role:'admin',
        readRights:false,
        createRigthst:true,
        updateRights:true,
        deleteRights:false
    },
    {
        id:7,
        subject : 'studyplans',
        role:'admin',
        readRights:false,
        createRigthst:true,
        updateRights:true,
        deleteRights:false
    },
    {
        id:8,
        subject : 'dashboard',
        role:'admin',
        readRights:false,
        createRigthst:true,
        updateRights:true,
        deleteRights:false
    },
    {
        id:9,
        subject : 'settings',
        role:'admin',
        readRights:false,
        createRigthst:true,
        updateRights:true,
        deleteRights:false
    },
    
]