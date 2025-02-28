export interface Course{
    id: number;
    courseName: string;
    courseCode: string;
    courseDescription: string;
    startDate:Date;
    endDate:Date;
    coursePrice:number;
    maxNumberOfStudents: number;
}