import { Component } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.css']
})
export class MyNotesComponent {
  impOrNot="imp";// ToDo Bind this to a form element in html
  narr:Note[]=[]; 
  dispList(e:Note[]){
    console.log("Inside dispList event capture");
    console.log(e);
    this.narr= this.narr.concat(e);
  }

}
