import { Component } from '@angular/core';
import { AuthService } from '../../auth-services/auth-service/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ ReactiveFormsModule,NgClass,NgIf,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

     signupForm: FormGroup;
    //  validateForm:FormGroup;

  constructor(private service:AuthService,private fb: FormBuilder) {} // FormBuilder ek angular ka helper class hai jo form create karne ke liye  hai

  ngOnInit(){
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      name:['',Validators.required]
      }, 
    { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  
  
  onSubmit() {
    if (this.signupForm.valid) {
      // console.log('Form Submitted', this.signupForm.value);
      alert("successful registerd");
      // API call ya localStorage logic yahan karein
    }
    else{
      alert("Unsuccessful registerd");
    }
  }

  // 👁️ Toggle functions

  
   register()
   {

    //  console.log(this.signupForm.value);
    // console.log("hello");
    this.service.signup(this.signupForm.value).subscribe((res)=>{
      
   })
   }
}
