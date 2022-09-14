import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HomeComponent } from '../home';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  title = 'material-login';
  SharedService: any;
  res: any;
  displayMsg: string = "";
  isAccountCreated: boolean = false;
  constructor(
    private router: Router, private http: HttpClient, private sharedService: SharedService
  ) {
    this.loginForm = new FormGroup({
      emailId: new FormControl('', [Validators.required, Validators.email, Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required, Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    });
  }

  ngOnInit(): void {
  }

  addloginDetails() {
    if (this.loginForm.valid) {

      var loginDetails = {
        emailId: this.loginForm.value.emailId,
        password: this.loginForm.value.password
      }
      return this.sharedService.loginDetails(loginDetails).subscribe(res => {
        if (res = "Success") {
          this.displayMsg = "Login successful";
          this.isAccountCreated = true;
        }
        else {
          this.displayMsg = "Something went wrong";
          this.isAccountCreated = true;
        }
        //console.log("AAAAAAAA" + res.toString());

      });
      //  .subscribe((res: any) => {
      //  this.res = res
      //  alert(this.res.toString());
      //});
    }
    else {
      return "Please fill the login form"
    }
  }
}

  
    
    //localStorage.setItem('user',this.loginForm.value)
    //this.router.navigate([HomeComponent]);
  



//import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
//import { Component, OnInit, Input } from '@angular/core';
//import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { Route, Router } from '@angular/router';
//import { HomeComponent } from '../home';

//@Component({
//  selector: 'app-login',
//  templateUrl: './login.component.html',
//  styleUrls: ['./login.component.scss']
//})
//export class LoginComponent {

//  //loginForm: FormGroup | any;
//  @Input() loginForm: any;
//  emailId: string = "";
//  password: string = "";
//  title = 'material-login';
//  public loginDetails?: ILoginDetails[];
//    login!: LoginComponent;
//  //loginForm = new FormGroup({
//  //  email: new FormControl(),
//  //  password: new FormControl()
//  //});

//  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
//    //this.ngOnInit(): void {
//    //  emailId : this.loginForm.emailId,
//    //  password : this.loginForm.password
//    //}

//    onSubmit(this.loginDetails)
//    {
//      const formData = new FormData();
//      formData.append('file', this.loginForm.get('email').value);

//      //this.httpClient.post<any>(this.loginForm.email).subscribe(
//      //  (res) => console.log(res),
//      //  (err) => console.log(err)
//      //);
//    }


//    function onSubmit(loginDetails: any)
//    {
      
//       // login = this.loginDetails as unknown as ILoginDetails;
//      //return this.login;
//    };
//    //function addCustomer(loginForm: any): string {
//    //  var customerDetails = {
//    //    emailId: loginForm.emailId,
//    //    password: loginForm.password
//    //  };
//    //  http.post('/customerDetails', customerDetails).subscribe((res: { toString: () => any; }) => {
//    //    alert(res.toString());
//    //    return res;
        
//    //  })
//    //}
   
      
//    //}
//    //http.get<LoginDetails[]>('/getloginDetails').subscribe(result => {
//    //  this.loginDetails = result;
//    //}, error => console.error(error));
//  }
//    //ngOnInit(): void {
//    //    throw new Error('Method not implemented.');
//    //}

//}
////onSubmit(){
////    if(!this.loginForm.valid){
////     return;
////   }
//interface ILoginDetails {
//  email: string;
//  password: string
//}





//function addCustomer(loginDetails: any) {
//    throw new Error('Function not implemented.');
//}
////export class LoginComponent implements OnInit {
////  loginForm: FormGroup | any;
////  title = 'material-login';

////  constructor(
////    private router:Router
////  ) {
////    this.loginForm = new FormGroup({
////      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
////        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
////      ),]),
////      password: new FormControl('', [Validators.required,Validators.pattern(
////        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
////      )])
////    });
////   }

////  ngOnInit(): void {
////  }

////  onSubmit(){
////    if(!this.loginForm.valid){
////      return;
////    }
////    localStorage.setItem('user',this.loginForm.value)
////    this.router.navigate([HomeComponent]);
////  }
////}
