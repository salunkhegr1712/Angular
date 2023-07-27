import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[RendererBased]'
})
export class RendererBasedDirective {

  constructor(private abc:Renderer2, private element:ElementRef) {}

  // now we will do the changes with using Renderer2 object and ElementRef object
  ngOnInit(){

    this.abc.setStyle(this.element.nativeElement,"background-color","red")
    this.abc.setStyle(this.element.nativeElement,"font-size","20px")
  
  }

}
