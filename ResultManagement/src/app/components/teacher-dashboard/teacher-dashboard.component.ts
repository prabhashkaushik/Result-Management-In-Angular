import { Component, OnInit } from '@angular/core';
import{ApiService} from '../../services/api.service';
import{FormBuilder,FormGroup} from '@angular/forms';
import{StudentRecord} from './teacher-dashboard.model'

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
  
  
  formValue !: FormGroup;

  studentRecord = new StudentRecord();
  allStudentRecords ! : any;

  constructor( private api : ApiService,private formBuilder:FormBuilder) { }

  
  ngOnInit(): void {    
    this.formValue=this.formBuilder.group({
      rollNumber:[''],
      studentName:[''],
      dateOfBirth:[''],
      score:['']
    })

    this.getRecords();
   
  }
  getRecords(){
    this.api.getRecord()
    .subscribe(res=>{
      this.allStudentRecords=res;
    })
  }
  deleteRecord(row:any){
    this.api.deleteRecord(row.id)
    .subscribe(res=>{
    
      this.getRecords();
    })
  }
  addRecord(){
    this.studentRecord.rollNumber=this.formValue.value.rollNumber;
    this.studentRecord.name=this.formValue.value.studentName;
    this.studentRecord.dateOfBirth=this.formValue.value.dateOfBirth;
    this.studentRecord.score=this.formValue.value.score;

    if(this.studentRecord.rollNumber==0||
      this.studentRecord.name==''||
      this.studentRecord.dateOfBirth==''||
      this.studentRecord.score==0){
        alert('please fill all the details')
      }else
        this.api.postRecord(this.studentRecord)
    .subscribe(res=>{
      console.log(res);
     
      this.formValue.reset();

      this.getRecords()
     

      let ref = document.getElementById('cancelbtn');
      ref?.click();

      

    
    },
    err=>{
      
      alert("user already exists")
    });
    }

    onEdit(row:any){
      this.studentRecord.id=row.id;
      this.formValue.controls['rollNumber'].setValue(row.rollNumber);
      this.formValue.controls['score'].setValue(row.score);
      this.formValue.controls['studentName'].setValue(row.name);
      this.formValue.controls['dateOfBirth'].setValue(row.dateOfBirth);
      

    }
    updateRecord(){

      this.studentRecord.rollNumber=this.formValue.value.rollNumber;
      this.studentRecord.name=this.formValue.value.studentName;
      this.studentRecord.dateOfBirth=this.formValue.value.dateOfBirth;
      this.studentRecord.score=this.formValue.value.score;
      this.api.updateRecord(this.studentRecord,this.studentRecord.id)
      .subscribe(res=>{
        this.formValue.reset();
        this.getRecords()
        let ref = document.getElementById('cancelbtn');
        ref?.click();
      })

    }


 

}
