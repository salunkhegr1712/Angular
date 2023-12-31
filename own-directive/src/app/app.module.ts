import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { greenBackgroundDirective } from './my-directive/green-background.directive';
import { blueBackgroundDirective } from './my-directive/blue-background.directive';
import { RendererBasedDirective } from './my-directive/renderer-based.directive';


@NgModule({
  declarations: [
    AppComponent,
    greenBackgroundDirective,
    blueBackgroundDirective,
    RendererBasedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
