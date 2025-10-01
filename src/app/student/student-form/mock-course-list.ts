import { Course } from "../models/course.model" 

  export const  courses: Course[] = [
    {       
        id:1,
        courseName: 'Mathematics 101',  
        courseCode: 'MATH101',
        courseDescription: 'Introduction to basic mathematical concepts and operations.',
        startDate: new Date('2024-09-01'),
        endDate: new Date('2025-06-30'),        
    },
    {
        id:2,
        courseName: 'English Literature',       
        courseCode: 'ENG201',
        courseDescription: 'Exploration of classic and contemporary English literature.',
        startDate: new Date('2024-09-01'),  
        endDate: new Date('2025-06-30'),
    },
    {
        id:3,   
        courseName: 'Biology Basics',
        courseCode: 'BIO101',
        courseDescription: 'Fundamental principles of biology, including cell structure and function.',
        startDate: new Date('2024-09-01'),  
        endDate: new Date('2025-06-30'),
    }   
    ]