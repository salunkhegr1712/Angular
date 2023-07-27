import { Directive, ElementRef } from "@angular/core";

@Directive({
      selector:"[greenBackground]"
})

export class greenBackgroundDirective {

      constructor(public elmnt:ElementRef){}

      ngOnInit(){
            this.elmnt.nativeElement.style.backgroundColor="green"
      }
}