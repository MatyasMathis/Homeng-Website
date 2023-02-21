import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactBarComponent } from './contact-bar/contact-bar.component';
import { FooterComponent } from './footer/footer.component';

import { TermsComponent } from './terms/terms.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimatedElementComponent } from './animated-element/animated-element.component';
import { ServicesComponent } from './services/services.component';
import { HoverCardComponent } from './hover-card/hover-card.component';
import { HoverCardComponent1 } from './hover-card-2/hover-card.component';
import { HoverCardComponent3 } from './hover-card 3/hover-card.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    ContactBarComponent,
    FooterComponent,
    
    TermsComponent,
    AnimatedElementComponent,
    ServicesComponent,
    HoverCardComponent,
    HoverCardComponent1,
    HoverCardComponent3
  
    
   
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
