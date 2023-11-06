import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-login-page',
  templateUrl: './teacher-login-page.component.html',
  styleUrls: ['./teacher-login-page.component.css']
})
export class TeacherLoginPageComponent implements OnInit {
 
  public loginForm !:FormGroup

  constructor(private formbuilder:FormBuilder,private  http : HttpClient,
    private router :Router) { }

 

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl('', [Validators.required, Validators.minLength(3)]),
      password:new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }
  teacherLogIn(){
    this.http.get<any>("http://localhost:3000/teacher")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        
        this.loginForm.reset();
        this.router.navigate(['teacher-dashboard'])
      }
      else{
        alert("user not found")
      }
    },err=>{
      alert("something went wrong")
    })
  }

}

