import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './cmnts/homepage/homepage.component';
import { FirstComponent } from './cmnts/first/first.component';
import { SecondComponent } from './cmnts/second/second.component';
import { SecondItemComponent } from './cmnts/second-item/second-item.component';
import { HeaderComponent } from './cmnts/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FirstComponent,
    SecondComponent,
    SecondItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
