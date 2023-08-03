import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Validator } from '@angular/forms';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.css']
})
export class MyReactiveFormComponent implements OnInit  {
  regForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    dob:new FormControl(new Date()),
    age: new FormControl(21)
  
  
});

ngOnInit(){
  this.regForm.controls["firstName"].setValidators([Validators.required,Validators.minLength(4)]);
  this.regForm.controls["email"].setValidators(Validators.email);
}

onSubmit(){
  console.log(this.regForm.value);
  
}

}
