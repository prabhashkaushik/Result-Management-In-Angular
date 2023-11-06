import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import { TeacherLoginPageComponent } from './components/teacher-login-page/teacher-login-page.component';
import { StudentLoginPageComponent } from './components/student-login-page/student-login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { AddStudentPageComponent } from './components/add-student-page/add-student-page.component';
import { TeacherSignupComponent } from './components/teacher-signup/teacher-signup.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';

const routes :Routes=[
  {path:'',redirectTo:'home-page',pathMatch:'full'},
  {path:'teacher-login', component:TeacherLoginPageComponent},
  {path:'student', component:StudentLoginPageComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'teacher-dashboard',component:TeacherDashboardComponent},
  {path:'student-dashboard',component:StudentDashboardComponent},
  {path:'add-record',component:AddStudentPageComponent},
  {path:'teacher-signup',component:TeacherSignupComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
export const routingComponents =[TeacherLoginPageComponent,StudentLoginPageComponent,HomePageComponent]