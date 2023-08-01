import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Person } from './person';
import {NgForm} from '@angular/forms';
import { MyRestService } from '../my-rest.service';
import { R3SelectorScopeMode } from '@angular/compiler';



@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent {
p = new Person();
constructor(private rs:MyRestService){}

submitted = false;

onSubmit(x:NgForm) { 
  console.log(x);
  var z= this.rs.get("http://localhost:3000/posts"); 
  console.log(z);



}

  

}
