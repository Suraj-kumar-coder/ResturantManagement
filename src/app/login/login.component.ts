import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../auth-services/auth-service/auth.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  email = '';
  password = '';
  message = '';

  
  
  //  loginForm: FormGroup;

  constructor(private authservice:AuthService,private router:Router) {}
  
  onLogin() {
    if(this.email=="admin@gmail.com" && this.password=="admin")
    {
   alert("successful")
    this.router.navigate(['admindash']);//path
    localStorage.setItem("adminemail",this.email);//store the value
  }
    

  else{
    this.authservice.onlogin(this.email,this.password).subscribe({
      next: (res) => {
        this.message = res.message;
        console.log('✅ Login Success:',this.message);alert("successful login");
        this.router.navigate(['userdash']);
        localStorage.setItem('useremail',this.email);
        

      },
      error: (err) => {
        this.message = err.error?.error || 'Login failed';
        console.error('❌ Login Failed:', this.message);
        alert("unsuccessful login")
      }
    });
   }
  
    
  }

  

    // Admin
    

}



//static or hard cord

  //static or hard cord
// onLogin(){
  // if(this.userObj.userEmail=="suraj@gmail.com" && this.userObj.password=="1234")
  // {
  //   alert("successful")
  //   this.router.navigate(['userdash']);//path
  //   localStorage.setItem("useremail",this.userObj.userEmail);//store the value
  // }
  // else{
  //   alert("unSuccessful");
  // }
// }



