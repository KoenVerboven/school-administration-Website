export interface SchoolClass {
    id: number;
    name: string;
    grade: number; // e.g., 1, 2, 3 for first, second, third grade
    schoolId: number; 
    departmentId?: number; // optional, if classes are organized by departments
    responsibleTeacherId: number; 
    studentIds?: number[]; 
    createdAt: Date; 
    updatedAt: Date; 
    isActive: boolean; 
    academicYear: number; 
    section?: string; // optional, e.g., 'A', 'B', 'C' for different sections of the same grade
    description?: string; 
    schedule?: string; 
    roomNumber?: string; 
    subjectIds?: number[]; // optional, list of subject IDs taught in this class
  
}    