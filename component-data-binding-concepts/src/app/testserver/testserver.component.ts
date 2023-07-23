import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testserver',
  templateUrl: './testserver.component.html',
  styleUrls: ['./testserver.component.css']
})
export class TestserverComponent {

  @Output() newEvent:EventEmitter<any>=new EventEmitter() 
  // newServerContent = '';

  // this is one way 
  // that to access the local identifier using event handler function 
  // but there exist another way 

  @ViewChild("serverContent", { static: true })
  serverContentData!: ElementRef;

  constructor(){
    
  }
  onAddServer(serverName:any) {
    console.log(this.serverContentData.nativeElement.value)
    // console.log(serverName,serverContent)

    let m:any={

      type: 'server',
      name: serverName.value,
      content: this.serverContentData.nativeElement.value
    }
    this.newEvent.emit(m)
  
  }

  onAddBlueprint(serverName:any) {
    
    console.log(this.serverContentData.nativeElement.value)
    // console.log(serverName,serverContent)

    let m:any={

      type: 'blueprint',
      name: serverName.value,
      content: this.serverContentData.nativeElement.value
    }
    this.newEvent.emit(m)
  }
}
