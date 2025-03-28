import { Routes } from '@angular/router';
import { DashboardListComponent } from './dashboard/dashboard-list/dashboard-list.component';
import { DashboardItem } from './models/dashboardItem';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseFormComponent } from './course/course-form/course-form.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherFormComponent } from './teacher/teacher-form/teacher-form.component';
import { ExamListComponent } from './exam/exam-list/exam-list.component';
import { ExamFormComponent } from './exam/exam-form/exam-form.component';
import { ExamResultListComponent } from './exam/examresult-list/examresult-list.component';
import { StudyplanListComponent } from './study/studyplan-list/studyplan-list.component';
import { StudyplanFormComponent } from './study/studyplan-form/studyplan-form.component';
import { LoginFormComponent } from './user/login/login-form/login-form.component';
import { ResetPasswordFormComponent } from './user/reset-password-form/reset-password-form.component';
import { ChangePasswordFormComponent } from './user/change-password-form/change-password-form.component';
import { CheckYourEmailFormComponent } from './user/check-your-email-form/check-your-email-form.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

export const routes: Routes = [
    {path: '', component: DashboardListComponent},
    {path: 'dashbord', redirectTo: '', pathMatch:'full'},
    {path: 'dashbordtem', redirectTo: '', component:DashboardItemComponent},
    {path: 'students',component:StudentListComponent},
    {path: 'createstudent', component: StudentFormComponent},
    {path: 'studentdetail/:action/:id', component: StudentFormComponent},
    {path: 'courses',component:CourseListComponent},
    {path: 'createcourse', component: CourseFormComponent},
    {path: 'coursedetail/:action/:id', component: CourseFormComponent},
    {path: 'teachers',component:TeacherListComponent},
    {path: 'createteacher', component: TeacherFormComponent},
    {path: 'teacherdetail/:action/:id', component: TeacherFormComponent},
    {path: 'exams',component:ExamListComponent},
    {path: 'createxam', component: ExamFormComponent},
    {path: 'examdetail/:action/:id', component: ExamFormComponent},
    {path: 'examresults',component:ExamResultListComponent},
    {path: 'studyplans',component:StudyplanListComponent},
    {path: 'createstudyplan',component:StudyplanFormComponent},
    {path: 'studyplandetail/:action/:id',component:StudyplanFormComponent},
    {path: 'login',component:LoginFormComponent},
    {path: 'resetpassword',component:ResetPasswordFormComponent},
    {path: 'changepassword',component: ChangePasswordFormComponent},
    {path: 'checkyouremail', component: CheckYourEmailFormComponent}
];
