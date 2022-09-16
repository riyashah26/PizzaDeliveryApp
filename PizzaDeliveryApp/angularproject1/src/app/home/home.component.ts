import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'app-home';
  SharedService: any
  
  constructor(
    private router: Router, private http: HttpClient, private sharedService: SharedService
  ) {
    
  }
  images = 
    {
      src: 'assets/images/offers.jfif',
      alt: 'A tasty treat'
    }  
 
  ngOnInit() {
  }

}







