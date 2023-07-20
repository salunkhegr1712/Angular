import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestserverComponent } from './testserver/testserver.component';
import { BlueprintComponent } from './blueprint/blueprint.component';

@NgModule({
  declarations: [
    AppComponent,
    TestserverComponent,
    BlueprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
