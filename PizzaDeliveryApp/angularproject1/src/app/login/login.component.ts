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

      return this.sharedService.loginDetails(this.loginForm.value).subscribe(res => {
   
        if (res.statusCode == "200") {
          this.displayMsg = "Login successful";
          this.isAccountCreated = true;
          this.router.navigate(['/home']);
        }
        else {
          this.displayMsg = res.errorMsg;
          this.isAccountCreated = true;
        }
      }, error => {
        console.error('errorMsg', error);
        this.displayMsg = "Something went wrong";
        this.isAccountCreated = true;
      });
    }
    else {
      return "Please fill the login form"
    }
  }
}
