import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  insights:String="Insights";
  des:String="We provide a global antenna based on facts, not hype, to help improve returns on your IT and business investments";
  imgpath:String="../../assets/images/office.jpg"
  h:String= "300px" ;
  x:String="";
  

  hiAction():String{
    console.log("Just clicked Hi");
  return "clicked Hi";
  } 

  anotherMeth(){
    this.x =  this.hiAction();
  }

  onImg(ev:Event){
    console.log(ev);
    console.log("Img Mouse over");
  }
}
