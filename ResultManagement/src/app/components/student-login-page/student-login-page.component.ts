import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators,FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-student-login-page',
  templateUrl: './student-login-page.component.html',
  styleUrls: ['./student-login-page.component.css']
})
export class StudentLoginPageComponent implements OnInit {

  public loginForm !: FormGroup

  constructor(private formbuilder: FormBuilder,
    private http: HttpClient,
    private router : Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      rollNumber:new FormControl('', [Validators.required, Validators.minLength(3)]),
      dateOfBirth: new FormControl('', [Validators.required, ])
    })

  }

  studentLogIn() {
    this.http.get<any>("http://localhost:3000/posts")
      .subscribe(res => {
        const user = res.find((a: any)=>{
          console.log(a.email)
          return a.rollNumber == this.loginForm.value.rollNumber && a.dateOfBirth === this.loginForm.value.dateOfBirth
        });
        if(user){
          this.loginForm.reset();
          this.router.navigate(["student-dashboard"],{
            state:{ID:user.id}
          })
        }
        else{
          alert("Invalid Credentials")
          
        }
      },err=>{
        alert("no record found")
        this.loginForm.reset();
      })
  }
}
