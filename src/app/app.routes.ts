import { Routes } from '@angular/router';
import { DashboardListComponent } from './dashboard/dashboard-list/dashboard-list.component';
import { SchoolListComponent } from './school/school/school-list/school-list.component';
import { SchoolFormComponent } from './school/school/school-form/school-form.component';
import { DepartmentListComponent } from './school/department/department-list/department-list.component';
import { DepartmentFormComponent } from './school/department/department-form/department-form.component';
import { ClassListComponent}    from './school/class/class-list/class-list.component';
import { ClassFormComponent } from './school/class/class-form/class-form.component';
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
import { StudyplanDetailListComponent } from  './study/studyplan-detail-list/studyplan-detail-list.component';   
import { UserListComponent } from './user/user-list/user-list.component'; 
import { UserFormComponent } from './user/user-form/user-form.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings/settings-list.component';
import { PermissionsComponent } from './settings/permissions/permissions.component';
import { PageNotFoundComponent } from './general/page-not-found/page-not-found.component'
import { AuthGuard } from './user/auth.guard';
import { StudentPresenceComponent } from './student/student-presence/student-presence.component';
import { StudentsInfoComponent } from './dashboard/moreInfo/students-info/students-info.component';
import { ExamquestionListComponent } from './exam/examquestion-list/examquestion-list.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';
import { PaymentFormComponent } from './payment/payment-form/payment-form.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'dashbord',component:DashboardListComponent, canActivate:[AuthGuard]},
    {path: 'dashbordtem', redirectTo: '', component:DashboardItemComponent},
    {path: 'schools', component: SchoolListComponent, canActivate:[AuthGuard]},
    {path: 'schooldetail/:action/:id', component: SchoolFormComponent, canActivate:[AuthGuard]},
    {path: 'createschool', component: SchoolFormComponent, canActivate:[AuthGuard]},
    {path: 'departments', component: DepartmentListComponent, canActivate:[AuthGuard]},
    {path: 'createdepartment', component: DepartmentFormComponent, canActivate:[AuthGuard]},
    {path: 'departmentdetail/:action/:id', component: DepartmentFormComponent, canActivate:[AuthGuard]},
    {path: 'classes', component: ClassListComponent, canActivate:[AuthGuard]},
    {path: 'classdetail/:action/:id', component: ClassFormComponent, canActivate:[AuthGuard]},
    {path: 'createsclass', component: ClassFormComponent, canActivate:[AuthGuard]},
    {path: 'students',component:StudentListComponent, canActivate:[AuthGuard]},
    {path: 'createstudent', component: StudentFormComponent, canActivate:[AuthGuard]},
    {path: 'studentdetail/:action/:id', component: StudentFormComponent, canActivate:[AuthGuard]},
    {path: 'courses',component:CourseListComponent, canActivate:[AuthGuard]},
    {path: 'createcourse', component: CourseFormComponent, canActivate:[AuthGuard]},
    {path: 'coursedetail/:action/:id', component: CourseFormComponent, canActivate:[AuthGuard]},
    {path: 'teachers',component:TeacherListComponent, canActivate:[AuthGuard]},
    {path: 'createteacher', component: TeacherFormComponent, canActivate:[AuthGuard]},
    {path: 'teacherdetail/:action/:id', component: TeacherFormComponent, canActivate:[AuthGuard]},
    {path: 'exams',component:ExamListComponent, canActivate:[AuthGuard]},
    {path: 'createexam', component: ExamFormComponent, canActivate:[AuthGuard]},
    {path: 'examdetail/:action/:id', component: ExamFormComponent, canActivate:[AuthGuard]},
    {path: 'examresults',component:ExamResultListComponent, canActivate:[AuthGuard]},
    {path: 'studyplans',component:StudyplanListComponent},
    {path: 'createstudyplan',component:StudyplanFormComponent},
    {path: 'studyplandetail/:action/:id',component:StudyplanFormComponent},
    {path: 'login',component:LoginFormComponent},
    {path: 'resetpassword',component:ResetPasswordFormComponent},
    {path: 'changepassword',component: ChangePasswordFormComponent},
    {path: 'checkyouremail', component: CheckYourEmailFormComponent},
    {path: 'studyplandetail',component:StudyplanDetailListComponent},
    {path: 'users',component:UserListComponent, canActivate:[AuthGuard]},
    {path: 'createuser', component: UserFormComponent, canActivate:[AuthGuard]},
    {path: 'userdetail/:action/:id', component: UserFormComponent, canActivate:[AuthGuard]},
    {path: 'settings', component: SettingsComponent, canActivate:[AuthGuard]},
    {path: 'permissions', component: PermissionsComponent, canActivate:[AuthGuard]},
    {path: 'studentpresence', component: StudentPresenceComponent, canActivate:[AuthGuard]},
    {path: 'studentsInfo', component: StudentsInfoComponent, canActivate:[AuthGuard]},
    {path: 'examquestions', component: ExamquestionListComponent, canActivate:[AuthGuard]},
    {path: 'payments', component: PaymentListComponent, canActivate:[AuthGuard]},
    {path: 'createpayment', component: PaymentFormComponent, canActivate:[AuthGuard]},
    {path: 'paymentdetail/:action/:id', component: PaymentFormComponent, canActivate:[AuthGuard]},
    {path: '**', component: PageNotFoundComponent}
]; 
