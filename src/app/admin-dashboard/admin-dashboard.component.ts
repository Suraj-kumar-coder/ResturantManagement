import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CategoryComponent } from './categorys/category-component/category.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  


   constructor(private router:Router,){}

  

   
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

