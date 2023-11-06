import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { TeacherLoginPageComponent } from './teacher-login-page/teacher-login-page.component';
import { StudentLoginPageComponent } from './student-login-page/student-login-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddStudentPageComponent } from './add-student-page/add-student-page.component';
import { EditStudentPageComponent } from './edit-student-page/edit-student-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import{AppRoutingModule,routingComponents} from "../app-routing.module"
import {MatIconModule} from '@angular/material/icon';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component'
import { HttpClientModule } from '@angular/common/http';
import{ApiService} from '../services/api.service';
import { TeacherSignupComponent } from './teacher-signup/teacher-signup.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

 




@NgModule({
  declarations: [
    
    HomePageComponent,
    TeacherLoginPageComponent,
    StudentLoginPageComponent,
    HeaderComponent,
    FooterComponent,
    AddStudentPageComponent,
    EditStudentPageComponent,
    routingComponents,
    TeacherDashboardComponent,
    TeacherSignupComponent,
    StudentDashboardComponent,


  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    

   
  ],
  exports: [
    HeaderComponent,
    AddStudentPageComponent,
    EditStudentPageComponent,
    FooterComponent,
    HomePageComponent,
    StudentLoginPageComponent,
    TeacherLoginPageComponent,
    TeacherDashboardComponent,
  ]
})
export class ComponentsModule { }
