import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
 

  constructor(private httpclient:HttpClient) {}
    
    private baseurl="http://localhost:8080/"

    signup(signuprequest:any):Observable<any>
    {
      return this.httpclient.post<[]>(this.baseurl+"api/signup",signuprequest);
    }


    onlogin(email: string, password: string):Observable<any>
  {
    // const body = { email, password };
    return this.httpclient.post<[]>(this.baseurl + "api/login", {email,password});
  }

  //forgetpassword

  forgetPassword(email:String,password:string):Observable<any>{
    return this.httpclient.get<any>(this.baseurl+`api/user/${email}/${password}`)
  }

}
    
  
   
  

