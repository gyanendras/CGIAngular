import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { CareersComponentComponent } from './careers-component/careers-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponentComponent } from './header-component/header-component.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterformComponent,
    AboutUsComponentComponent,
    CareersComponentComponent,
    HeaderComponentComponent,
    MyReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatExpansionModule,
    MatToolbarModule,    
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
