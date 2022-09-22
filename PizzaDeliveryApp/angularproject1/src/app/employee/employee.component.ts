import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup | any;
  title = 'employee';
  SharedService: any;
  res: any;
  employee: any;
  id!: number;
  employeeList: any;
  displayMsg: string = "";
  isAccountCreated: boolean = false;


  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {
    this.employeeForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required, Validators.email, Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      contactDetails: new FormControl('', [Validators.required, Validators.pattern(
        '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
      ),]),
      salary: new FormControl('', [Validators.required, Validators.pattern(
        '^[0-9]*$'
      )]),
    });
  }

  ngOnInit() {
    this.sharedService.getEmployees()
      .subscribe(employee => {
        this.employeeList = employee;
        //this.router.navigate(['/employeeList']);
      }, error => {
        console.error('errorMsg', error);
        this.displayMsg = "Something went wrong";
        this.isAccountCreated = true;
      });
    //const id = this.route.snapshot.paramMap.get('id');
    //this.sharedService.getEmployee(this.id).subscribe(employee => this.employee = employee);
  }
  delete(id: number) {
    return this.sharedService.deleteEmployee(id).subscribe(res => {
        if (res.statusCode == "200") {
          this.displayMsg = "Employee added successfully";
          this.isAccountCreated = true;
          this.sharedService.getEmployees()
            .subscribe(employee => {
              this.employeeList = employee;
              this.router.navigate(['/employeeList']);
            }, error => {
              console.error('errorMsg', error);
              this.displayMsg = "Something went wrong";
              this.isAccountCreated = true;
            });
        }
        else {
          this.displayMsg = res.errorMsg;
          this.isAccountCreated = true;
        }
      }, error => {
        console.error('errorMsg', error);
        this.displayMsg = "Something went wrong";
        this.isAccountCreated = true;
      })
  }

  getDetails(id: number) {
    this.sharedService
      .getEmployee(id)
      .subscribe(employee => this.employeeList = employee);
  }

  addEmployeeDetails() {
    if (this.employeeForm.valid) {
      return this.sharedService.addEmployee(this.employeeForm.value)
        .subscribe(res => {   
          if (res.statusCode == "200") {
            this.displayMsg = "Employee added successfully";
            this.isAccountCreated = true;
            this.sharedService.getEmployees()
              .subscribe(employee => {
                this.employeeList = employee;
                this.router.navigate(['/employeeList']);
              }, error => {
          console.error('errorMsg', error);
          this.displayMsg = "Something went wrong";
          this.isAccountCreated = true;
        });
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
      return "Please fill the employee details form"
    }
  }
}
