import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthService } from 'src/app/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup;
  mailid:any;
  pass:any;

  constructor(private auth:AuthService, private http:HttpClient, private router:Router, private formBuilder:FormBuilder) { }

  isLogged = false;

  loginData = {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "mailid":new FormControl(null,[Validators.required]),
      "pass": new FormControl(null, [Validators.required] )
    })
  }

  getEmail(){
    return this.loginForm.get('mailid')
  }

  getPassword(){
    return this.loginForm.get('pass')
  }

  checkResponse = false;
  onSubmit(){

    this.auth.getAuthToken(this.loginForm.value.mailid, this.loginForm.value.pass)
   
   console.log(this.mailid, this.pass)
      
        }
      }