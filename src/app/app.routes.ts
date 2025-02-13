import { Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';


export const routes: Routes = [
    {path: '', component: StudentListComponent},
    {path: 'createstudent', component: StudentFormComponent},
    {path: 'studentdetail/:action/:id', component: StudentFormComponent},
    {path: 'students', redirectTo: '', pathMatch:'full'},
    {path: 'courses',component:CourseListComponent},
    {path: 'teachers',component:TeacherListComponent}
];
