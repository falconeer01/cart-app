import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products:Product[] = [
    {
      id: 1,
      name: "product1",
      price: 750,
      img: "https://picsum.photos/200/300",
      count: 0
    },
    {
      id: 2,
      name: "product2",
      price: 340,
      img: "https://picsum.photos/200/300",
      count: 0
    },
    {
      id: 3,
      name: "product3",
      price: 1140,
      img: "https://picsum.photos/200/300",
      count: 0
    },
  ];

  increase(id:number){
    this.products.map(product => product.id==id ? product.count+=1 : product.count);
  }

  decrease(id:number){
    this.products.map(product => product.id==id && product.count > 0 ? product.count-=1 : product.count);
  }

  getTotalPrice(id:number):number{
    let totalPrice = 0;

    this.products.map(product => {
      if(product.id==id){
        totalPrice = product.count * product.price;
      }
    })

    return totalPrice;
  }
}
