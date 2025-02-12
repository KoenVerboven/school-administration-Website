import { Routes } from '@angular/router';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { CourseTableComponent } from './course-table/course-table.component';


export const routes: Routes = [
    {path: '', component: StudentTableComponent},
    {path: 'createstudent', component: StudentFormComponent},
    {path: 'studentdetail/:action/:id', component: StudentFormComponent},
    {path: 'students', redirectTo: '', pathMatch:'full'},
    {path: 'courses',component:CourseTableComponent}
];
