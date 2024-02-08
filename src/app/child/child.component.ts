import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

  public bc:string = "";

  @Input() public ac:string = "";

  @Output() public bEvent:EventEmitter<string> 
                                      = new EventEmitter();

  constructor() { }

  send(){
    this.bEvent.emit(this.bc);
  }

}
