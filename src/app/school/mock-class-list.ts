import { SchoolClass } from "./models/schoolclass.model";

export const mockClassList: SchoolClass[] = [
    {
        id: 1,
        name: 'Class 1A',
        grade: 1,
        schoolId: 101,
        departmentId: 201,
        responsibleTeacherId: 201,  
        studentIds: [301, 302, 303],
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date('2023-01-02'),
        isActive: true,
        academicYear: 2023,
        section: 'A',
        description: 'First grade, section A',
        schedule: 'Mon-Fri 8:00-12:00',
        roomNumber: '101',
        subjectIds: [401, 402]
    },
    {
        id: 2,
        name: 'Class 2A',
        grade: 2,
        schoolId: 101,
        departmentId: 201,
        responsibleTeacherId: 202,  
        studentIds: [301, 302, 303],
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date('2023-01-02'),
        isActive: true,
        academicYear: 2023,
        section: 'A',
        description: 'First grade, section A',
        schedule: 'Mon-Fri 8:00-12:00',
        roomNumber: '101',
        subjectIds: [401, 402]
    },
    {
        id: 3,
        name: 'Class 3A',
        grade: 3,
        schoolId: 101,
        departmentId: 201,
        responsibleTeacherId: 203,  
        studentIds: [301, 302, 303], 
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date('2023-01-02'),
        isActive: true,
        academicYear: 2023,
        section: 'A',
        description: 'First grade, section A',
        schedule: 'Mon-Fri 8:00-12:00',
        roomNumber: '101',
        subjectIds: [401, 402 ]
    }, 
]

