import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
 {path:'', component:HomeComponent},
 {path:'about-us', component:AboutComponent},
 {path:'contact',component:ContactComponent},
 {path:'terms',component:TermsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
