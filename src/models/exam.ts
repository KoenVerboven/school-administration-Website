export interface Exam{
    id: number;
    courseId: number;
    examTitle: string;
    description: string;
    examenDate: Date;
    maxScore:number;
    minScoreToPassExam: number;
}