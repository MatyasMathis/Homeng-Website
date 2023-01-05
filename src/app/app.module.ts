import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactBarComponent } from './contact-bar/contact-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimatedElementComponent } from './animated-element/animated-element.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    ContactBarComponent,
    FooterComponent,
    ContactComponent,
    TermsComponent,
    AnimatedElementComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
