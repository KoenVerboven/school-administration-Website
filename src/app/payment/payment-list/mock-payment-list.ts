import {Payment} from '../models/payment.model';

export const payments: Payment[] = [    
    {
        id: 1,
        studentId: 101,
        studentFullName: 'John Doe',
        courseId: 201,
        amount: 1500,
        paymentDate: new Date('2023-10-01'),
        paymentMethod: 'Credit Card',
        transactionId: 'TXN123456789'
    },
    {       
        id: 2,
        studentId: 102,    
        studentFullName: 'Jane Smith',                 
        courseId: 202,
        amount: 2000,
        paymentDate: new Date('2023-10-02'),
        paymentMethod: 'PayPal',
        transactionId: 'TXN987654321'
    },
    {   
        id: 3,
        studentId: 103,
        studentFullName : 'Alice Johnson',
        courseId: 203,
        amount: 1200,
        paymentDate: new Date('2023-10-03'),
        paymentMethod: 'Bank Transfer',
        transactionId: 'TXN456789123'
    },
    {
        id: 4,
        studentId: 104,
        studentFullName: 'Bob Brown',
        courseId: 204,
        amount: 1800,
        paymentDate: new Date('2023-10-04'),
        paymentMethod: 'Credit Card',           
        transactionId: 'TXN321654987'
    },
    {       
        id: 5,      
        studentId: 105,
        studentFullName: 'Charlie Green',
        courseId: 205,
        amount: 1600,   
        paymentDate: new Date('2023-10-05'),
        paymentMethod: 'Debit Card',
        transactionId: 'TXN789123456'
    }
];  