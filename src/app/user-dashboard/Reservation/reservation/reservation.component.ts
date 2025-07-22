import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {



  reservationForm:FormGroup
  tableTypes:string[]=["vip", 'Outdoor', 'Standard', 'Private']


  constructor(private userService:UserServiceService,private fb:FormBuilder){
     this.reservationForm = this.fb.group({
      tableType: ['', Validators.required],
      dateTime: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  

  

  onSubmit()
  {
  //   if(this.reservationForm.valid)
  //   {
  //     console.log(this.reservationForm.value)
  //   }
  //   else{
  //     console.log("something went wrong");
  //   }
    this.userService.postReservation(this.reservationForm.value)
     
    .subscribe((res)=>{
      
     
      if(res.id!=null)
      {
        console.log(res);
      alert("reserve seat successfully");
      }
      else{
        alert("something wrong");
      }
      
    })
   }

}
