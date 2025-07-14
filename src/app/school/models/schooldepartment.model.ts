export interface SchoolDepartment {
    id: number; 
    name: string; 
    schoolId: number; 
    headOfTheDepartmentId: number; 
    createdAt: Date; 
    updatedAt: Date; 
    isActive: boolean; 
    description?: string; 
    facultyIds?: number[]; 
    budget?: number; 
    yearEstablished?: number; 
    type?: string; // optional, e.g., 'Academic', 'Administrative', 'Support'
    website?: string; 
    logoUrl?: string; 
    contactEmail?: string; 
    contactPhone?: string; 
    locationWithinTheSchool?: string; 
    section?: string; // optional, e.g., 'Science', 'Arts', 'Sports' for specific sections within the department
    establishedDate?: Date; 
}