import { Component } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';
import { ViewItem } from './view-item';
import { NgFor } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-view-item',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './view-item.component.html',
  styleUrl: './view-item.component.css'
})
export class ViewItemComponent {
      
  constructor(private userService:UserServiceService,private fb:FormBuilder){}

  viewItem:ViewItem[]=[]
  titleform:FormGroup


  ngOnInit()
  {
    this.titleform=this.fb.group({
    title: ['', [Validators.required]],
  })
    
    this.getAllItem();
  }


  getAllItem()
  {
    this.userService.getAllitem().subscribe((res)=>{
      console.log(res);

      res.forEach(element => {
        element.processedImg="data:image/jpeg;base64,"+element.returnedImg;
        this.viewItem.push(element);
        
      });
      
    })
  }

  //title
  onSearch()

  {
    const title = this.titleform.get('title')?.value;
   this.viewItem = []; // Optional: clear previous results

  this.userService.getTitleItem(title).subscribe((res) => {
    console.log(res)
    res.forEach(element => {
      element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
      this.viewItem.push(element);
    });
  });
}



}
