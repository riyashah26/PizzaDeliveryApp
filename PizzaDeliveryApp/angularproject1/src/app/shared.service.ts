import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:7021/api/";
  text: any[] = [];
  cart: any[] = [];
  employee: any[] = [];

  constructor(private http: HttpClient) { }

  //POST-User Signing
  loginDetails(val: any): Observable<any> {
    return this.http.post<any>(this.APIUrl + 'Login/loginDetails', val, { responseType: 'json' }).pipe(
      catchError(err => this.catchAuthError(err)));
    
  }
  //error handle service
  catchAuthError(error: any): Observable<Response> {
    if (error && error.error && error.error.message) {
      console.log(error.error.message);
    }
    else if (error && error.message) {
      console.log(error.message);
    }
    else {
      console.log(JSON.stringify(error));
    }
    return throwError(error);
  }
//cart
  //DELETE - cart
  emptyCart() {
    return this.http.delete(this.APIUrl + 'cart/empty-cart').pipe(
      catchError(err => this.catchAuthError(err)))
  }
  //POST-Increase order
  increaseQty(payload: any) {
    return this.http.post(this.APIUrl + 'cart', payload).pipe(
      catchError(err => this.catchAuthError(err)))
  }
  ////GET - cart details
  getCartItems() {
    return this.http.get(this.APIUrl + 'cart').pipe(
      catchError(err => this.catchAuthError(err)))
  }
  //GET - product details
  getAllProducts() {
    return this.http.get(this.APIUrl + 'product').pipe(
      catchError(err => this.catchAuthError(err)))
  }
  // POST - add a new item
  addToCart(payload: any): Observable<any> {
    return this.http.post<any>(this.APIUrl + 'Order/orderDetails', payload, { responseType: 'json' }).pipe(
      catchError(err => this.catchAuthError(err)));
  }
  //employee
  getEmployees(): Observable<any> {
    return this.http.get(this.APIUrl + 'employee').pipe(
      catchError(err => this.catchAuthError(err)));
  }

  // GET - get a single employee using id
  getEmployee(id: number): Observable<any> {
    return this.http.get(this.APIUrl + 'employee' + id).pipe(
      catchError(err => this.catchAuthError(err)));
  }

  // POST - add a new employee
  addEmployee(employee: any): Observable<any> {
    return this.http.post<any>(this.APIUrl + 'Employee/employeeDetails', employee, { responseType: 'json' }).pipe(
      catchError(err => this.catchAuthError(err)));
  }

  // PUT - update an employee
  updateEmployee(id: number, update: any): Observable<any> {
    return this.http.put<any>(this.APIUrl + 'Employee/editEmployeeDetails'+id,update, { responseType: 'json' }).pipe(
      catchError(err => this.catchAuthError(err)));
  }

  // DELETE - delete an employee
  deleteEmployee(id: number): Observable<{}> {
    return this.http.delete(this.APIUrl + 'Employee/deleteEmployeeDetails' + id, { responseType: 'json' }).pipe(
      catchError(err => this.catchAuthError(err)));
  }

}

