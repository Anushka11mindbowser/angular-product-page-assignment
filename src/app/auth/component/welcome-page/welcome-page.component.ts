import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private router:Router) { }
 
  greeting = message

  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigateByUrl('/product-list')
  }


}
var myDate = new Date();
var myHours = myDate.getHours();
var message = '';
 if (myHours>5 && myHours<12){
   message = "Good Morning";
 }
 else if (myHours>=12 && myHours < 17){
   message = "Good Afternoon";
 }
 else if (myHours>=17 && myHours<21){
   message = "Good Evening"
 }
 else{
   message = "Hope you had a good day!"
 }
