import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { MenuComponent } from './menu';
import { OrderComponent } from './order';
import { CartComponent } from './cart';
import { EmployeeComponent } from './employee';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service'

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'order', component: OrderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: '**', component: HomeComponent }
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
