import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {FormControl, Validators,FormBuilder,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-teacher-signup',
  templateUrl: './teacher-signup.component.html',
  styleUrls: ['./teacher-signup.component.css']
})
export class TeacherSignupComponent implements OnInit {

  public signUpForm ! :FormGroup
  constructor(private formbuilder:FormBuilder,private http :HttpClient) { }

  ngOnInit(): void {
    this.signUpForm=this.formbuilder.group({
      fullName:new FormControl('', [Validators.required, Validators.minLength(3)]),
      email:new FormControl('', [Validators.required, Validators.minLength(3)]),
      password:new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  signup(){
    this.http.post<any>("http://localhost:3000/teacher",this.signUpForm.value)
    .subscribe(res=>{
      alert("user added")
      this.signUpForm.reset();
      let ref = document.getElementById('login-link')
      ref?.click()
    }); 
   }

}
