import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  constructor() { }

  public userForm:FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormGroup({
      hno: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl()
    }),
    cards: new FormArray([])
  })

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  add(){
    this.cardsFormArray.push(
      new FormGroup({
        cardno: new FormControl(),
        expiry: new FormControl(),
        cvv: new FormControl()
      })
    )
  }

  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);
  }

  submit(){
    console.log(this.userForm);
  }


}
