import { Course } from "./course.model";


export interface CourseSheduleWeekOverview{
    id: number;
    startTime: Date;
    Day0Course: string;
    Day1Course: any| Course;
    Day2Course:  any| Course;
    Day3Course:  any| Course;
    Day4Course:  any| Course;
    Day5Course:  any| Course;
    Day6CourseTitle: string;
    weekNumber: number;
}