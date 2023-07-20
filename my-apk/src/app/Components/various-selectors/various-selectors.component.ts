import { Component } from '@angular/core';

@Component({

  // we can inject the component html using attribute selector, class selector, tag selector (default)
  // selector: 'app-various-selectors',// this is selector as tag 
  // selector:"[app-various-selectors]",// this is selector as attrbute
  selector:".classname",// use the class to inject the Component

  
  templateUrl: './various-selectors.component.html',
  styleUrls: ['./various-selectors.component.css']
})
export class VariousSelectorsComponent {

}
