import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Person } from './person';
import {NgForm} from '@angular/forms';
import { MyRestService } from '../my-rest.service';
import { R3SelectorScopeMode } from '@angular/compiler';
import { Observable, throwError } from 'rxjs'; 



@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent {
p = new Person();
res!: String[];


constructor(private rs:MyRestService){}

submitted = false;

onSubmit(x:NgForm) {
  var z:Observable<any>; 
  console.log(x);
  
  z= this.rs.get("http://localhost:3000/posts"); 
  console.log(z);
  z.subscribe(
    success=>{
      console.log("got result");
      console.log(success);
      this.res=success;
    },
    error=>{console.log(error)}
  );

  console.log(this.res);


}

  

}
