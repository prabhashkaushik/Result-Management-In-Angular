import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

 
  id ! : number

  allStudentRecords!:any

  constructor(private router : Router,private http :HttpClient) {
    this.id=this.router.getCurrentNavigation()?.extras?.state?.['ID']
    console.log(this.id)
   }

  ngOnInit(): void {
    this.getRecordById(this.id);
  }

  getRecordById(id:number){
    this.http.get<any>("http://localhost:3000/posts/"+id)
    .subscribe(res=>{
      this.allStudentRecords=res
    })
  }
}
