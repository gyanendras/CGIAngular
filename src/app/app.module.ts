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
import { ReactiveFormsModule } from '@angular/forms';
import { MyNotesComponent } from './my-notes/my-notes.component';
import { MyNoteStoreComponent } from './my-note-store/my-note-store.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterformComponent,
    AboutUsComponentComponent,
    CareersComponentComponent,
    HeaderComponentComponent,
    MyReactiveFormComponent,
    MyNotesComponent,
    MyNoteStoreComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
