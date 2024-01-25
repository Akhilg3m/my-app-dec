import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent{

  public ages:number[] = [10,20,30,40];

  public states:string[] = ["Andhra", "Telangana", "Karnata"]

  public users:any = [
    {name:'abc', age:20, phone:9494},
    {name:'def', age:21, phone:9495},
    {name:'ccc', age:22, phone:9496},
    {name:'ddd', age:23, phone:9497},
  ];

  

}
