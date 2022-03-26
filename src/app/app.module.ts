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
import {HeroMainComponent} from "./components/hero-main.component";
import {WhyUsComponent} from "./containers/home/why-us.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroComponent,
    BoxesComponent,
    RedCircleComponent,
    AboutComponent,
    HeroMainComponent,
    WhyUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
