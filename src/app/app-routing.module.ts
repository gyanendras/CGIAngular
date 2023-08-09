import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { CareersComponentComponent } from './careers-component/careers-component.component';
import { MyNotesComponent } from './my-notes/my-notes.component';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [ 
{ path: 'aboutUs', component: AboutUsComponentComponent },
{ path: 'careers', component: CareersComponentComponent },
{ path: 'db', component: MyNotesComponent,canActivate:[authGuard]  },
{ path: 'login', component: LoginComponent},
{ path:"api/v1/notes",  component: MyNotesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
