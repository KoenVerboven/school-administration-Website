import { Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseFormComponent } from './course/course-form/course-form.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherFormComponent } from './teacher/teacher-form/teacher-form.component';
import { ExamListComponent } from './exam/exam-list/exam-list.component';
import { ExamFormComponent } from './exam/exam-form/exam-form.component';
import { ExamResultListComponent } from './exam/examresult-list/examresult-list.component';


export const routes: Routes = [
    {path: '', component: StudentListComponent},
    {path: 'students', redirectTo: '', pathMatch:'full'},
    {path: 'createstudent', component: StudentFormComponent},
    {path: 'studentdetail/:action/:id', component: StudentFormComponent},
    {path: 'courses',component:CourseListComponent},
    {path: 'createcourse', component: CourseFormComponent},
    {path: 'coursedetail/:action/:id', component: CourseFormComponent},
    {path: 'teachers',component:TeacherListComponent},
    {path: 'createteacher', component: TeacherFormComponent},
    {path: 'teacherdetail/:action/:id', component: TeacherFormComponent},
    {path: 'exams',component:ExamListComponent},
    {path: 'examdetail/:action/:id', component: ExamFormComponent},
    {path: 'examresults',component:ExamResultListComponent}
];
