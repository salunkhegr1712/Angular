import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueBackgroundComponent } from './my-directive/blue-background/blue-background.component';
import { GreenBackgroundComponent } from './my-directive/green-background/green-background.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueBackgroundComponent,
    GreenBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
