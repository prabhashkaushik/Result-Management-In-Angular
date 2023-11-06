import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  imageurl:string="../../../assets/images/bgImage.jpg"

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
  
  }

}
