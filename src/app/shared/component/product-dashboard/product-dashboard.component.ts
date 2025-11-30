import { Component, OnInit, ViewChild } from '@angular/core';
import { Iproduct } from '../../model/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  @ViewChild('prodForm') prodForm !: NgForm
  productsArr:Array<Iproduct>=[
    {
      pName:"Samsung",
      pDescription:"I love Samsaung",
      pid:"123",
      pCatg :"product"

    },
    {
      pName:"Iphone",
      pDescription:"I love Iphone",
      pid:"123",
      pCatg :"catlog"

    },
  
]
 
  constructor() { }

  ngOnInit(): void {}


  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, character => {
      const random = (Math.random() * 16) | 0;
      const value = character === 'x' ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  }



  onProductAdd(){
    if (this.prodForm.valid){
      console.log(this.prodForm)
      let newProd:Iproduct={...this.prodForm.value,pid:this.uuid()}
      this.prodForm.reset()
      this.productsArr.unshift(newProd)
    }

  }

}
