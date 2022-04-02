import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from "./components/layout/navbar.component";
import {HomeComponent} from "./pages/home.component";
import {BoxesComponent} from "./containers/home/boxes.component";
import {HeroComponent} from "./containers/home/hero.component";
import {RedCircleComponent} from "./containers/home/red-circle.component";
import {AboutComponent} from "./pages/about.component";
import {AboutHeroMainComponent} from "./containers/about/about-hero-main.component";
import {WhyUsComponent} from "./containers/home/why-us.component";
import {HowItWorksComponent} from "./pages/how-it-works.component";
import {HowHeroMainComponent} from "./containers/how-it-works/how-hero-main.component";
import {FooterComponent} from "./components/layout/footer.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ContactComponent} from "./pages/contact.component";
import {ContactHeroMainComponent} from "./containers/contact/contact-hero-main.component";
import {CarouselModule} from "ngx-owl-carousel-o";
import {AboutMainComponent} from "./containers/about/about-main.component";
import {WhatsappComponent} from "./components/whatsapp.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroComponent,
    BoxesComponent,
    RedCircleComponent,
    AboutComponent,
    AboutHeroMainComponent,
    WhyUsComponent,
    HowItWorksComponent,
    HowHeroMainComponent,
    FooterComponent,
    ContactComponent,
    ContactHeroMainComponent,
    AboutMainComponent,
    WhatsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
