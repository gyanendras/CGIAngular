import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Person } from './person';
import {NgForm} from '@angular/forms';
import { MyRestService } from '../my-rest.service';
import { R3SelectorScopeMode } from '@angular/compiler';
import { Observable, throwError } from 'rxjs';
import { Note } from '../note';
import { NoteArr } from '../note-arr';



@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent {
p = new Person();
res!: Note[];



constructor(private rs:MyRestService){}

submitted = false;

onSubmit(x:NgForm) {
  var z:Observable<Note[]>; 
  var q:Observable<any>; 
  console.log(x);

  var n1 = new Note("T4","N4",4);
  var n2 = new Note("T5","N5",5);

  var nArr = [n1,n2];

  z= this.rs.get("http://localhost:3000/notes"); 
  q= this.rs.post("http://localhost:3000/notes",nArr);
  // console.log(z);
  z.subscribe({
    next: (v) => {
    this.res=v;
   console.log(this.res);
   console.log(this.res[0].id);
   console.log(this.res[0].note);
   console.log(this.res[0].title);
    },
    error: (e) => console.error(e),
    complete: () => console.info('get complete')}
  );

  console.log("afert rest call");
  console.log(this.res); 
  //console.log(this.res[0].title);
  //console.log(this.res[0].note);

q.subscribe({
  next: (v) => console.log(v),
  error: (e) => {console.error(e);
  },
  complete: () => console.info('post complete')
}
);


}

  

}
