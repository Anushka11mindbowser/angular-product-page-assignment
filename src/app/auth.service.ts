import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loginUrl = "http://localhost:3000/users"
  
  constructor(private http:HttpClient, private router:Router) { }
  isLogged: boolean = false;
  checkUser: string = 'non-admin';
 

  getAuthToken(mailid:any, pass:any):void{

  this.http.get<any>(this.loginUrl).subscribe((res)=>{
    const user = res.find((a:any)=>{
      return a.email == mailid && a.password == pass;
    });

    if (user){
      this.isLogged = true;
      
      this.router.navigate(["welcome"])
    }

  })
    

  }
 
   

}
