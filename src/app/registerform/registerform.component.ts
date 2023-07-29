import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Person } from './person';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent {
p = new Person();
submitted = false;

onSubmit(x:NgForm) { console.log(x) }

  

}
