import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  title = 'order';
  SharedService: any;
  res: any;
  products: Array<object> = [];
  dataFromMenuPage: any[] = [];
  productList: any[] = [];
    _getProducts: any;
    model: any;

  constructor(
    private router: Router, private http: HttpClient, private sharedService: SharedService
  ) {
  }
  onRadioChange(entry: any): void {
    this.model = entry;
  }
  addItemToCart(product: any, quantity: any): void {
      let payload = {
        product: product,
        quantity,
        size: this.model
      };
      this.sharedService.addToCart(payload).subscribe(() => {
       //this._getProducts();
        alert('Product Added');
      });
  }
  
  ngOnInit(): void {
    this.dataFromMenuPage.push(this.sharedService.text);
    if (this.dataFromMenuPage) {
      if (this.dataFromMenuPage[0].name == 'Handmade Pan') {
        this.productList = [
          { id: '1',name: 'Margherita', src: 'assets/images/pizzaImage.jpg', price:'30',ingredients: 'Jalapenos,Bell Pepper,Mushroom,Onions,Tomato,Olives'},
          { id: '2', name: 'Cheese Pizza', src: 'assets/images/pizzaImage.jpg', price: '30',ingredients: 'Jalapenos,Bell Pepper,Mushroom,Onions,Tomato,Olives' },
          { id: '3', name: 'Veggie Pizza', src: 'assets/images/pizzaImage.jpg', price: '10',ingredients: 'Jalapenos,Bell Pepper,Mushroom,Onions,Tomato,Olives' }
        ]
      }
      else if (this.dataFromMenuPage[0].name == 'Speciality Pizza') {
        this.productList = [
          { id: '4', name: 'Extravaganza', src: 'assets/images/pizzaImage.jpg', price: '40',ingredients: 'Jalapenos,Bell Pepper,Mushroom,Onions,Tomato,Olives'},
          { id: '5', name: 'Chicago Style Deep Dish', src: 'assets/images/pizzaImage.jpg', price: '40',ingredients: 'Jalapenos,Bell Pepper,Mushroom,Onions,Tomato,Olives' },
          { id: '6', name: 'Newyork Style', src: 'assets/images/pizzaImage.jpg', price: '40',ingredients: 'Jalapenos,Bell Pepper,Mushroom,Onions,Tomato,Olives' }
        ]
      }
      else {
       this.productList = [
         { id: '7', name: 'Build Your own', src: 'assets/images/pizzaImage.jpg', price: '60',ingredients: 'Jalapenos,Bell Pepper,Mushroom,Onions,Tomato,Olives' }
           ]
      }
    }
  }
  addToMyCart(product: any) {
      this.sharedService.cart = product;
      console.log("AAAAAAAAAA" + JSON.stringify(product));
    }
   
}
