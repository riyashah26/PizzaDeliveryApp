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
  detailedEmployee: any;
 

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {
    this.employeeForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required, Validators.email, Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      contact: new FormControl('', [Validators.required, Validators.pattern(
      '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
      ),]),
       salary: new FormControl('', [Validators.required]),     
    });
}

  ngOnInit() {
    //const id = this.route.snapshot.paramMap.get('id');
    //this.sharedService.getEmployee(this.id).subscribe(employee => this.employee = employee);
  }
  delete(id: number) {
    this.sharedService
      .deleteEmployee(id)
      .subscribe(() => {
        this.employee = this.employee.filter((emp: { id: number; }) => emp.id !== id)
               // success message or error message
      })
  }

  getDetails(id: number) {
    this.sharedService
      .getEmployee(id)
      .subscribe(employee => this.detailedEmployee = employee);
  }
  onSubmit() {
    // add id field to formValues object
    /*let id = this.route.snapshot.paramMap.get('id');*/
    //this.employeeForm.id = id;
    //this.employeeForm.EmployeeTypeId = this.employeeForm.EmployeeTypeId;
    this.sharedService
      .addEmployee(this.employeeForm)
      .subscribe(() => {
       // success message or error message
      })
  }


}
