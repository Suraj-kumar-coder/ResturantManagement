import { Component } from '@angular/core';
import { CategoryServiceTsService } from './add-category-service/CategoryServiceTsService';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {


 categoryForm:FormGroup
 selectedFile: File  = null;


   constructor(private categoryServive:CategoryServiceTsService,private fb:FormBuilder,private router:Router){}
  
   ngOnInit()
   {
     this.categoryForm = this.fb.group({
      name: ['', Validators.required],
       price: ['', Validators.required],
      description: ['', Validators.required]
    });
    
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  


  onSubmit(): void {
    if (this.categoryForm.invalid || !this.selectedFile) {
      return;
    }
   }

   

   addCategory()
   {

    //  console.log(this.categoryForm.value);
    


     const formData = new FormData();
    formData.append('name', this.categoryForm.get('name')?.value);
    formData.append('price', this.categoryForm.get('price')?.value);
    formData.append('description', this.categoryForm.get('description')?.value);
    formData.append('img', this.selectedFile);
     this.categoryServive.postCategory(formData).subscribe((res)=>{

      if(res.id!=null)
      {
        // console.log(this.categoryForm.value);
        console.log(res);
         alert("AddCategory successfully");
         this.router.navigate(['/category'])
      }
      else{
        alert("something went wrong");
      }
      //get by id
      this.categoryServive.getCategory(res.id).subscribe((val)=>{
        console.log(val);

         })


     })
   }

  }




