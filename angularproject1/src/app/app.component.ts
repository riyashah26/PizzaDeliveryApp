import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {

}
  title = 'PizzaDeliveryApp';
  // clickEvent() {
  //   console.log("CLICL EVENT")
  //   this.router.navigateByUrl('../loginForm');
  // }
}