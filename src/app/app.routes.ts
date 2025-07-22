import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth-components/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddCategoryComponent } from './admin-dashboard/add-category/add-category.component';
import { CategoryComponent } from './admin-dashboard/categorys/category-component/category.component';
import { UpdateCategoryComponent } from './admin-dashboard/update/update-category/update-category.component';
import { ViewItemComponent } from './user-dashboard/view-item/view-item/view-item.component';
import { ReservationComponent } from './user-dashboard/Reservation/reservation/reservation.component';
import { ViewReservationComponent } from './user-dashboard/View-Reservation/view-reservation/view-reservation.component';
import { AllReservationComponent } from './admin-dashboard/Reservation/all-reservation/all-reservation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



export const routes: Routes = [
   
     { path: '', redirectTo: '/home', pathMatch: 'full' },
     {path:'home',component:HomeComponent},
    
     {path:"signup",component:SignupComponent},
   
     {path: "login",component:LoginComponent},
     {path:'userdash',component:UserDashboardComponent},
     {path:'admindash',component:AdminDashboardComponent},
     {path:'add-category',component:AddCategoryComponent},
     {path:'category',component:CategoryComponent},
     {path:'update-item/:id',component:UpdateCategoryComponent},
     //user
     {path:'view-Item',component:ViewItemComponent},
     {path:'reservation',component:ReservationComponent},
     {path:'view-reservation',component:ViewReservationComponent},
     {path:'view-reservation-admin',component:AllReservationComponent},
     {path:'forgot-password',component:ForgotPasswordComponent},
     
    
    


];



