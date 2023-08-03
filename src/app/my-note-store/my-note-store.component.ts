import { Component,Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Note } from '../note';


@Component({
  selector: 'app-my-note-store',
  templateUrl: './my-note-store.component.html',
  styleUrls: ['./my-note-store.component.css']
})
export class MyNoteStoreComponent {
  @Input()  impNote:String="";
  i1 = new Note("t1","impN1", 1);
  i2 = new Note("t2","impN2", 2);
  ig1 = new Note("igt1","igN1", 3);
  ig2 = new Note("igt2","igN2", 4);
  impList:Note[]=[this.i1,this.i2];
  ignList:Note[]=[this.ig1,this.ig2];


  @Output() evToParent = new EventEmitter<Note[]>();

  signalParent(){
    if(this.impNote=="imp"){
    this.evToParent.emit(this.impList);
    console.log("event emitted");
    }

    if(this.impNote=="ign"){
      this.evToParent.emit(this.ignList);
      }
  }


}
