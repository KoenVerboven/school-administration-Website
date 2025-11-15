export interface Course{
    id: number;
    courseName: string;
    courseCode: string;
    courseDescription: string;
    startDate:Date;
    endDate:Date;
    amountPaid?: number;
    totalAmount?: number;
    fullyPaid?: boolean;
}