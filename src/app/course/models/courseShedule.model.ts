export interface CourseShedule{
    id: number;
    courseId: number;
    dayOfWeek: string;
    weekNumber: number;
    startTime: string;
    endTime: string;
    schoolclassId: number;
    classroomId: number;
    teacherId: number;
    status: number;
    remarks: string;

}