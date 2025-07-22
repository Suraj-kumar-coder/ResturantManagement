import { Component } from '@angular/core';
import { AddCategoryComponent } from '../../add-category/add-category.component';
import { CategoryServiceTsService } from '../../add-category/add-category-service/CategoryServiceTsService';
import { Allcategory } from '../allcategory';
import { NgFor } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  

 
   constructor(private service:CategoryServiceTsService,private fb:FormBuilder,private router:Router){}
   
   allcategory:Allcategory[]=[]
    titleform:FormGroup

   

  ngOnInit()
  {
     this.titleform = this.fb.group({
          title: ['', [Validators.required]],
     });

    this.getCategories();
  }


   getCategories()
   {
    this.service.getAllCategories().subscribe((res)=>{
      // console.log(res);
      res.forEach(element => {
         element.processedImg='data:image/jpeg;base64,'+element.returnedImg;
          this.allcategory.push(element);
      
        });

        //  this.allcategory=(res);

    })
   }

   onSearch(){
    
   const title = this.titleform.get('title')?.value;
   this.allcategory = []; // Optional: clear previous results

  this.service.getAllCategoriesByTitle(title).subscribe((res) => {
    console.log(res)
    res.forEach(element => {
      element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
      this.allcategory.push(element);
    });
  });
}


// update

onUpdate(id:number)
{
   this.router.navigate(['/update-item',id])
}



onDelete(id:number)
{
  
   
    this.service.Deletecategory(id).subscribe({
  next: (res) => {
    console.log('Deleted successfully', res);
    alert("deleted succesfully");
    
  },
  error: (err) => {
    console.error('Delete failed', err);
    alert("somethieng went wrong");
  }
});
  
}

  }

  

