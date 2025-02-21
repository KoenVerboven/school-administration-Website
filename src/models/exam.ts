export interface Exam{
    id: number;
    courseId: number;
    examTitle: string;
    Description: string;
    ExamDate: Date;
    maxScore:number;
    minScoreToPassExam: number;
}