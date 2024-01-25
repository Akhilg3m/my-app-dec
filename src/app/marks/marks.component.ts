import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {

  public results:any = [
    {name:'a', subject:'math', marks:50, result:'pass'},
    {name:'b', subject:'math', marks:10, result:'fail'},
    {name:'c', subject:'math', marks:70, result:'pass'},
    {name:'d', subject:'math', marks:20, result:'fail'},
    {name:'e', subject:'math', marks:80, result:'pass'},
    {name:'f', subject:'math', marks:19, result:'fail'},
  ];

  public today:any = new Date();

}
