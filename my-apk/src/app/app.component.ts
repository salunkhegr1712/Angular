import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  // so you can write a small code or you can also able to write the entire file and that 
  // code will be further down used to to inject html using selector 
  // template:"<h1>angular from template<h1>",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-apk';
  name="ghansham"
}
