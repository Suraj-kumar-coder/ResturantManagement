import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth-services/auth-service/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  

  constructor(private fb: FormBuilder,private service:AuthService){
    this.resetForm = this.fb.group({
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(6)]],
  })
  }

  resetForm:FormGroup

  ngOnInit()
  {
    


}

onSubmit()
{
   
   const email = this.resetForm.get('email')?.value;
   const password = this.resetForm.get('password')?.value;

    this.service.forgetPassword(email,password).subscribe((res)=>{
    console.log(res);
    })
}
  

}
