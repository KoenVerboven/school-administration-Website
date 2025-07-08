export interface Exam{
    id: number;
    courseId: number;
    examTitle: string;
    description: string;
    examenDate: Date;
    examEndDateTime: Date;
    maxScore:number;
    minScoreToPassExam: number;
}