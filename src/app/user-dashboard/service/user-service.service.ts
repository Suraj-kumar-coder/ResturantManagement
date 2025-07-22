import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ObjectUnsubscribedErrorCtor } from 'rxjs/internal/util/ObjectUnsubscribedError';
// import { ViewItem } from '../view-item/view-item/class/view-item';



const BASIC_URL="http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})



export class UserServiceService {
  
  constructor(private httpclient:HttpClient) { }

  getAllitem():Observable<any>{
    return this.httpclient.get<[]>(BASIC_URL+"api/user/viewItem");
  }

  //get title item
  getTitleItem(title:string):Observable<any>
    {
     return  this.httpclient.get<any>(BASIC_URL+`api/user/categories/${title}`);
    }

    // Reservation

    postReservation(ReservationDto:any):Observable<any>{
     
     const email = localStorage.getItem('useremail');
  if (!email) {
    throw new Error('User email not found in localStorage');
  }

  // Step 1: First call backend to get user ID from email
  return this.httpclient.get<number>(BASIC_URL + `api/user/${email}`).pipe(
    // Step 2: After getting ID, attach to reservation and post
    switchMap((userId: number) => {
      ReservationDto.customerId = userId;
      return this.httpclient.post<any>(BASIC_URL + "api/user/reservation", ReservationDto)
       
     
    })
  );

    }

    //getReservationByuserId
    getReservationByUserId():Observable<any>{
     
     const email = localStorage.getItem('useremail');
  if (!email) {
    throw new Error('User email not found in localStorage');
  }

  // Step 1: First call backend to get user ID from email
  return this.httpclient.get<number>(BASIC_URL + `api/user/${email}`).pipe(
    // Step 2: After getting ID, attach to reservation and post
    switchMap((userId: number) => {
     
      return this.httpclient.get<any>(BASIC_URL + `api/user/reservation/${userId}`)
       
     
    })
  );

    }
  
}



