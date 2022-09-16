import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  title = 'cart';
  SharedService: any;
  carts: any;
  cartDetails: any;
  cartProductList: any[] = [];



  constructor(
    private router: Router, private http: HttpClient, private sharedService: SharedService
  ) {
  }
  _getCart(): void {
    this.sharedService.getCartItems().subscribe((data: any) => {
      this.carts = data.data;
      // this.cartDetails = data.data;
      console.log(this.carts);
    });
  }
  _increamentQTY(id: any, quantity: any): void {
    const payload = {
      productId: id,
      quantity,
    };
    this.sharedService.increaseQty(payload).subscribe(() => {
      this._getCart();
      alert('Product Added');
    });
  }
  _emptyCart(): void {
    this.sharedService.emptyCart().subscribe(() => {
      this._getCart();
      alert('Cart Emptied');
    });
  }

  ngOnInit(): void {
    this._getCart();
  }
  addProductToCart(product: any) {
    if (product.name) {
      this.sharedService.text = product;
    }
  }
}
