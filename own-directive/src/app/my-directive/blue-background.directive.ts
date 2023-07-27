import { Directive, ElementRef } from "@angular/core";

@Directive({
      selector:"[blueBackground]"
})

export class blueBackgroundDirective {

      constructor(public elmnt:ElementRef){}

      ngOnInit(){
            this.elmnt.nativeElement.style.backgroundColor="blue"
      }
}