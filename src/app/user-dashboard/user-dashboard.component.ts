import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
   
  constructor(private router:Router){}

  loggedInUser:String='';
   
   ngOnInit() {
    // Suppose user name is stored in localStorage after login
    this.loggedInUser = localStorage.getItem('email');
  }

  //getAllitem


  


  

  onLogout()
  {
    this.router.navigate(['home']);
    localStorage.removeItem('useremail');
    localStorage.removeItem('adminemail');
  }

  onHome()
  {
    this.router.navigate(['home']);
  }
}
