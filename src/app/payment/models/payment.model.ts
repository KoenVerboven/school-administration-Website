export interface Payment{
    id: number;
    userId: number;
    amount: number;
    paymentDate: Date;
    paymentMethod: string;
    status: string;
    transactionId: string;
}