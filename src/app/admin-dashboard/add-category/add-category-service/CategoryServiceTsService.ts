import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Allcategory } from '../../categorys/allcategory';


const BASIC_URL="http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceTsService {

  constructor(private httpClient:HttpClient) { }

  postCategory(categoryDto:any):Observable<any>{
    return this.httpClient.post<[]>(BASIC_URL+"api/admin/category",categoryDto);
  }

  // GetByid

   getCategory(id:number):Observable<any>{
    return this.httpClient.get<[]>(BASIC_URL+"api/admin/"+id);
  }

  getAllCategories():Observable<Allcategory[]>
  {
   return  this.httpClient.get<Allcategory[]>(BASIC_URL+"api/admin/categories");
  }
   // by search title
  getAllCategoriesByTitle(title:string):Observable<Allcategory[]>
  {
   return  this.httpClient.get<Allcategory[]>(BASIC_URL+`api/admin/categories/${title}`);
  }

  //update category only fetch the data from backend

  getAllCategoriesByid(id:number):Observable<Allcategory[]>
  {
   return  this.httpClient.get<Allcategory[]>(BASIC_URL+`api/admin/${id}`);
  }

  //update category
  putCategory(id:number,categoryDto:any):Observable<any>{
    return this.httpClient.put<[]>(BASIC_URL+`api/admin/update/${id}`,categoryDto);
  }

  //delete category

  Deletecategory(id:number):Observable<any>{
    return this.httpClient.delete<[]>(BASIC_URL+`api/admin/delete/${id}`);

  } 

  //getReservation

  getAllReservation():Observable<any>{
    return this.httpClient.get<any>(BASIC_URL+"api/admin/Reservation");
  }

  //ChangeReservationStatus
  getChangeReservationStatus(id:number, status:string):Observable<any>{
    return this.httpClient.get<any>(BASIC_URL+`api/admin/reservation/${id}/${status}`);
  }

  
}
