import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  public vehicles: any = [];
  public term: string = "";

  public column: string = "";
  public order: string = "";

  public page: number = 0;


  constructor(private _vehicleService: VehicleService, private _router: Router) {

    _vehicleService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )

  }

  // lch

  delete(id: string) {
    this._vehicleService.deleteVehicle(id).subscribe(
      (data: any) => {
        alert(data.Vehicle + " deleted succesfully");
        // location.reload();
      },
      (err: any) => {
        alert("Internal server error");
      }
    )
  }

  filter() {
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )
  }

  sort() {
    this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )
  }

  pagination() {
    this._vehicleService.getPagedVehicles(this.page).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )
  }

  edit(id: string) {
    this._router.navigateByUrl("/dashboard/edit-vehicle/" + id);
  }

}
