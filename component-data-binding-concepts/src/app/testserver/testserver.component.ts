import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-testserver',
  templateUrl: './testserver.component.html',
  styleUrls: ['./testserver.component.css']
})
export class TestserverComponent {

  @Output() newEvent:EventEmitter<any>=new EventEmitter() 
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    console.log("onaddserver")
    let m:any={
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    }
    this.newEvent.emit(m)
  
  }

  onAddBlueprint() {
    console.log("onaddblueprint")
    let m:any={
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    }
    this.newEvent.emit(m)
  }
}
