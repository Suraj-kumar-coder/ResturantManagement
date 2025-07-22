import { Component } from '@angular/core';
import { CategoryServiceTsService } from '../../add-category/add-category-service/CategoryServiceTsService';
import { CommonModule, DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-all-reservation',
  standalone: true,
  imports: [NgFor,DatePipe,CommonModule],
  templateUrl: './all-reservation.component.html',
  styleUrl: './all-reservation.component.css'
})
export class AllReservationComponent {

  constructor(private adminService:CategoryServiceTsService){}
 
  reservation:any;

  ngOnInit()
  {
    this.getAllReservatios();
  }
    
  getAllReservatios()
  {
    this.adminService.getAllReservation().subscribe((res)=>{
      console.log(res);
      this.reservation=res;

    })
  }
  //changeStatusReservation

  changeReservationStatus(reservationId:number,status:string)
  {
    console.log(reservationId)
    console.log(status)
    this.adminService.getChangeReservationStatus(reservationId,status).subscribe((res)=>{
      if(res.id!=null)
      {
        console.log(res);
        //refresh
        this.getAllReservatios();
        alert("ReservationStatus change SuccessFuly")

      }
    })
  }

}
