import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Css1Component } from './css1/css1.component';
import { Css2Component } from './css2/css2.component';
import { Css3Component } from './css3/css3.component';
import { Css4Component } from './css4/css4.component';
import { Css5Component } from './css5/css5.component';

@NgModule({
  declarations: [
    AppComponent,
    Css1Component,
    Css2Component,
    Css3Component,
    Css4Component,
    Css5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
