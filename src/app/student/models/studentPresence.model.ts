export interface StudentPresence{
    id: number;
    studentId: number;
    classId: number,
    studentName: string;
    courseId?: number;
    courseStartDateTime: Date;
    presence: boolean;
    toLate?: number;
    absenceReason?: number;
    comment: string;
    createByTeacherId: number;
    picture?: string;
 }