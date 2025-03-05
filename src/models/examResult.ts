export interface ExamResult{
    id: number;
    studentLastName: string; // property must start with small letter !!!
    studentFirstName: string;
    studentEmail:string;
    examName: string;
    examenResult: number;
    maxScore: number;
    minScoreToPassExam: number;
}