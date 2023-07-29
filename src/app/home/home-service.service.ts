import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  hiAction():String{
    console.log("Just clicked Hi");
  return "clicked Hi";
  } 

  constructor() { }
}
