import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { CourseListComponent } from './course-list/course-list.component';


export const routes: Routes = [
    {path: '', component: StudentListComponent},
    {path: 'createstudent', component: StudentFormComponent},
    {path: 'studentdetail/:action/:id', component: StudentFormComponent},
    {path: 'students', redirectTo: '', pathMatch:'full'},
    {path: 'courses',component:CourseListComponent}
];
