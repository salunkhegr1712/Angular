import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-data-binding-concepts';
  serverElements :any= [];

  addServerFunction(m:any){
    console.log(m)
    this.serverElements.push(m)

  }
  
}
