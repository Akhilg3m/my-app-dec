import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public term:string = "";

  public product:any = {name:"", price:0, rating:0, isFreeDelivery:false};

  public products:any = [
    {name:'pen', price:10, rating:3, isFreeDelivery:true},
    {name:'phone', price:100, rating:2, isFreeDelivery:false},
    {name:'shirt', price:400, rating:4, isFreeDelivery:true},
    {name:'cap', price:200, rating:5, isFreeDelivery:false},
    {name:'mobile case', price:300, rating:2, isFreeDelivery:true},
    {name:'remote', price:400, rating:2.5, isFreeDelivery:false},
    {name:'tv', price:12000, rating:1, isFreeDelivery:true},
    {name:'headset', price:1000, rating:1.5, isFreeDelivery:false},
    {name:'airpods', price:12000, rating:1.8, isFreeDelivery:true},
    {name:'pant', price:2000, rating:4.4, isFreeDelivery:false},
  ];

  filter(){
    this.products = this.products.filter((product:any)=>product.name.includes(this.term))
  }

  pricelh(){
    this.products = this.products.sort((a:any,b:any)=>a.price-b.price)
  }

  discount(){
    this.products = this.products.map((product:any)=>{
      product.price = product.price/2;
      return product;
    })
  }

  total(){
    let totalPrice = this.products.reduce((sum:any, product:any)=>sum+product.price,0);
    alert(totalPrice);
  }

  add(){
    this.products.push({...this.product});
  }

  delete(i:number){
    this.products.splice(i,1);
  }

}
