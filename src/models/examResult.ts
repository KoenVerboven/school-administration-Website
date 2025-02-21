export interface ExamResult{
    id: number;
    studentId: number;
    courseId: number;
    examenResultScore:number;
    examenResultComment: string;
    checkedByTeacherId: number;
}