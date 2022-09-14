//import { HttpClientModule } from '@angular/common/http';
//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';

//import { AppComponent } from './app.component';

//@NgModule({
//  declarations: [
//    AppComponent
//  ],
//  imports: [
//    BrowserModule, HttpClientModule
//  ],
//  providers: [],
//  bootstrap: [AppComponent]
//})
//export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { SharedService } from './shared.service';

import { HomeComponent } from './home';
import { LoginComponent } from './login';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
