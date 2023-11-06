import { Component } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ResultManagement';
  loginForm=new FormGroup({
    email:new FormControl(' ',Validators.required),
    password : new FormControl(' '),
  })
  get email() {return this.loginForm.get('email')}
}
