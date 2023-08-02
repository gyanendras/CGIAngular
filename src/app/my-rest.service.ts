import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './note';
import { NoteArr } from './note-arr';

@Injectable({
  providedIn: 'root'
})
export class MyRestService {
   constructor(private http: HttpClient) { }

  get(url:string):Observable<Note[]>{
    return this.http.get<Note[]>(url);
  }

  post(url:string, data:Note[]){
    return this.http.post(url,data);
  }
}
