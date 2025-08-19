export interface School {
    id: number; 
    name: string; 
    streetAndNumber: string; 
    zipCode: string; 
    countryId?: number; 
    contactPhone?: string; 
    contactEmail?: string; 
    website?: string; 
    logoUrl?: string; 
    schoolType?: string; 
    description?: string; 
    numberOfStudents?: number; 
    numberOfTeachers?: number; 
    establishedYear?: number; 
    facilities?: string[]; 
    socialMedia?: string[]; 

}