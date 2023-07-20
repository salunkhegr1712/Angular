import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FirstComponent } from './Components/first/first.component';
import { VariousSelectorsComponent } from './Components/various-selectors/various-selectors.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    VariousSelectorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
