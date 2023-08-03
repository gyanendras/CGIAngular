import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Validator } from '@angular/forms';
import {OnInit} from '@angular/core';
import { inject } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginService = inject(LoginServiceService);
  aroute = inject(ActivatedRoute);
  router = inject(Router);

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('') 
  
  
});

ngOnInit(){
  this.loginForm.controls["userName"].setValidators([Validators.required]);
  
}

onSubmit(){
  console.log(this.loginForm.controls.userName.value);
  console.log(this.loginForm.controls.password.value);
  var un:String = new String(this.loginForm.controls.userName.value);
  var pw:String = new String(this.loginForm.controls.password.value);
  this.loginService.authenticate(un,pw);
  var returnUrl = this.aroute.snapshot.queryParams['returnUrl'];
  console.log("return url = "+ returnUrl);
  this.router.navigateByUrl(returnUrl);



  
  
}

}
