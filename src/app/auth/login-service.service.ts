import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
   uname:String = "user1";
   pwd:String = "pwd1";
   isAuth:boolean = false;

  constructor() { }
  
  authenticate(username:String, password:String){
    console.log(username+" "+password);
    if(username == "user1" && password == "pwd1"){
      this.isAuth = true;
      console.log("isAuth "+this.isAuth);
      return true;
      
    }
    console.log(username == "user1");
    this.isAuth = false;
    return false;
  };

  isAuthenticate(){
    console.log(this.isAuth);
    return this.isAuth;
  }
}
