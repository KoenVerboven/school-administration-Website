import { Course } from "./course.model";


export interface CourseSheduleWeekOverview{
    id: number;
    startTime: Date;
    Day0Course: string;
    Day1Course: Course;
    Day2Course: Course;
    Day3Course: Course;
    Day4Course: Course;
    Day5Course: Course;
    Day6CourseTitle: string;
    weekNumber: number;
}