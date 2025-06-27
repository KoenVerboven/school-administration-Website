export interface StudentPresence{
    id: number;
    studentId: number;
    classId: number,
    studentName: string;
    courseId: number;
    courseStartDateTime: Date;
    presence: boolean;
    absenceReason: number;
    comment: string;
    createByTeacherId: number;
 }