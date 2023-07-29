import { Component, inject } from '@angular/core';
import { HomeServiceService } from './home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  insights:String="Insights";
  txtAboutUS:String="About Us New";
  des:String="We provide a global antenna based on facts, not hype, to help improve returns on your IT and business investments";
  imgpath:String="../../assets/images/office.jpg"
  h:String= "300px" ;
  x:String="";
  homeService:HomeServiceService = inject(HomeServiceService);
  



  anotherMeth(){
    this.x =  this.homeService.hiAction();
  }

  onImg(ev:Event){
    console.log(ev);
    console.log("Img Mouse over");
  }
}
