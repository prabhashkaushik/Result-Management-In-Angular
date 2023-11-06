import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup} from '@angular/forms';

import{ApiService} from '../../services/api.service';


@Component({
  selector: 'app-add-student-page',
  templateUrl: './add-student-page.component.html',
  styleUrls: ['./add-student-page.component.css']
})
export class AddStudentPageComponent implements OnInit {

  // formValue !: FormGroup;
  // studentRecord = new StudentRecord();
  // allStudentRecords ! : any;
  constructor(private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {

   
  }}
