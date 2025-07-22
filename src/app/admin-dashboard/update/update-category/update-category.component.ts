import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoryServiceTsService } from '../../add-category/add-category-service/CategoryServiceTsService';

import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent {

  
 
  
  itemId: number;
  updateCategory:FormGroup;
  selectedFile: File | null = null;

  constructor(private service:CategoryServiceTsService,private route:ActivatedRoute,private router:Router,private fb:FormBuilder){}


  
    
  ngOnInit() {


     this.updateCategory = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      image: ['']
    });
//     Part	Meaning
// this.route.snapshot.paramMap.get('id')	URL se id parameter ko string form me le raha hai. For example: URL me /update-item/5 ho toh ye "5" return karega
// !	   Ye non-null assertion operator hai. Angular ko bata raha hai ki "ye value null nahi hai, trust me!"
// +	   Ye unary plus operator hai, jo string ko number me convert karta hai. For example: +"5" ➝ 5

    this.itemId = +this.route.snapshot.paramMap.get('id')!;
    this.getItemById(this.itemId);
  }

  getItemById(id: number): void {
    this.service.getAllCategoriesByid(id).subscribe(data => {
      console.log(data);

       const item=data[0];   //data[0] ka matlab hota hai:data array ka pehla element (i.e. index 0 par jo object hai)
      this.updateCategory.patchValue({  // auto fill kasrta hai from may backend data ko
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.returnedImg
      });
    });
  }

  // update category

  updateCategorys(){
    const formData = new FormData();
    
    formData.append('name', this.updateCategory.get('name')?.value);
    formData.append('price', this.updateCategory.get('price')?.value);
    formData.append('description', this.updateCategory.get('description')?.value);
    formData.append('image', this.selectedFile);
    this.service.putCategory(this.itemId,formData).subscribe((res)=>{

      if(res.id!=null)
      {
        // console.log(this.categoryForm.value);
        console.log(res);
         alert("update successfully");
         this.router.navigate(['/category']);
      }
      else{
        alert("something went wrong");
      }
      //get by id
      


     })
   }


   onSubmit(): void {
    if (this.updateCategory.invalid || !this.selectedFile) {
      return;
    }
   }
  
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }


  }


    
  


