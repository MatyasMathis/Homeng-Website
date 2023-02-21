import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
 {path:'', component:HomeComponent},
 {path:'about-us', component:AboutComponent},
 {path:'home',component:HomeComponent},
 {path:'terms',component:TermsComponent},
 {path:'services',component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
