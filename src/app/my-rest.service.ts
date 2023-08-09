import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './note';
import { NoteArr } from './note-arr';

@Injectable({
  providedIn: 'root'
})
export class MyRestService {
   constructor(private http: HttpClient) { }
   authToken = "mytoken";
   headers = new HttpHeaders();
   requestOptions = { headers: this.headers };
 


  get(url:string):Observable<any>{
    this.headers = this.headers.set('Authorization', 'Bearer ${this.authToken}');
    return this.http.get<any>(url,this.requestOptions);
  }

 

  post(url:string, data:Note[]){
    this.headers = this.headers.set('Authorization', 'Bearer ${this.authToken}');
     return this.http.post(url,data,this.requestOptions);
  }
}
