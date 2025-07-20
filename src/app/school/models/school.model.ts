export interface School {
    id: number; 
    name: string; 
    address: string; 
    zipCode: string; 
    city: string; 
    locationState: string; 
    country: string; 
    phone?: string; 
    email?: string; 
    principalId: number; 
    isActive: boolean; 
    yearEstablished?: number; 
    type?: string; // optional, e.g., 'Public', 'Private', 'Charter'
    website?: string; 
    logoUrl?: string; 
    description?: string; 
    schoolType?: string; // e.g., 'Public', 'Private', 'Charter'
    numberOfStudents?: number;
    numberOfTeachers?: number;
    establishedYear?: number; // e.g., 1990
    facilities?: string[]; // e.g., ['Library', 'Science Lab', 'Sports Ground']
    createdAt: Date; 
    updatedAt: Date; 
}