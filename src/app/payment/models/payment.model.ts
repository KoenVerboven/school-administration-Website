export interface Payment{
    id: number;
    studentId: number;
    studentFullName: string;
    courseId: number;
    amount: number;
    paymentDate: Date;
    paymentMethod: string;
    transactionId: string;
}