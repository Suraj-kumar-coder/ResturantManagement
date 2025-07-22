import { Component } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';
import { Reservation } from './class/reservation';
import { CommonModule, DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-view-reservation',
  standalone: true,
  imports: [NgFor,DatePipe,CommonModule],
  templateUrl: './view-reservation.component.html',
  styleUrl: './view-reservation.component.css'
})
export class ViewReservationComponent {
   constructor(private usersErvice:UserServiceService){}

   ReservationTable:Reservation[]=[]


  ngOnInit()
  {
    this.getAllReservationByUserId();
  }
   
   getAllReservationByUserId()
   {
    this.usersErvice.getReservationByUserId().subscribe((res)=>{
      console.log(res);

     
        this.ReservationTable=res;
       
    })
   }

}
