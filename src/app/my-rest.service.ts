import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyRestService {
   constructor(private http: HttpClient) { }

  get(url:string){
    this.http.get(url);
  }

  post(url:string, data:string){

  }
}
