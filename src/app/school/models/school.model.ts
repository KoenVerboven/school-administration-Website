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
    createdAt: Date; 
    updatedAt: Date; 
    isActive: boolean; 
    yearEstablished?: number; 
    type?: string; // optional, e.g., 'Public', 'Private', 'Charter'
    website?: string; 
    logoUrl?: string; 
    description?: string; 
}