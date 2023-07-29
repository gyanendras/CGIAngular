import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { CareersComponentComponent } from './careers-component/careers-component.component';

const routes: Routes = [ { path: 'aboutUs', component: AboutUsComponentComponent },
{ path: 'careers', component: CareersComponentComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
