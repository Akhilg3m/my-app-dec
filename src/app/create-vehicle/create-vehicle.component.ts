import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public id:string = "";

  constructor(private _vehicleService:VehicleService, private _activatedRoute: ActivatedRoute) {

    _activatedRoute.params.subscribe(
      (data:any)=>{

      this.id = data.id;

       if(this.id){
        _vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicleForm.patchValue(data);
          },
          (err:any)=>{
            alert("Internal server error");
          }
        )
       }

      }
    )

  }

  public vehicleForm:FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    color: new FormControl(),
    image: new FormControl()
  });

  sumbit(){

    if(this.id){
      // update
      this._vehicleService.updateVehicle(this.id, this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("Updated successfully");
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }
    else{
      // create
      this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("Created successfully");
          this.vehicleForm.reset();
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )

    }

  }


}
