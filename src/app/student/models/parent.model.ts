export interface Parent{
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    sortOrder: number;
    studentId: number;
    relationshipToStudent: number;
    addressSameAsStudent: boolean;
    occupation: string;
    workPhoneNumber: string;
    workEmail: string;
    isPrimaryContact: boolean;
    receivesInvoices: boolean;
    receivesReports: boolean;
    receivesMailings: boolean;
    receivesSms : boolean;
    comments: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
    isActive: boolean;  
    isDeleted: boolean;
    
}