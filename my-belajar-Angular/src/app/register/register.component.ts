import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], //CommonModule wajib agar ngIf nya bisa jalan
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  formError: String = "";

  //Inject Class Router dan Service Authetication
  router: Router = inject(Router);
  authService: AuthenticationService = inject(AuthenticationService);

  constructor(private fb: FormBuilder){
    this.registerForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  get name() {
    return this.registerForm.get('name');
  }
  
  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
  // Fungsi get adalah untuk memudahkan kita memanggil model
  // Di Form ada model yang sesuai dengan formgroup

  submitRegister(): void {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      console.log('Form submitted', formData);
      //Panggil method submitRegister()
      this.authService.submitRegister(this.registerForm).then((res) => {
        if(res.message !=null){
          this.formError = res.message;
        }else if(res.token !=null){
          this.authService.saveToken(res.token);
          this.router.navigateByUrl('/'); //Ketika Register Berhasil Maka Halaman yang dituju Home
        }else{
          this.formError = 'Register Failed Please Try Again';
        }
      })
    } else {
      this.formError = 'All fields are required, please try again';
      //console.log('Form is not valid');
    }
  }
  //Submit Register method yang dipakai ketika form di submit
  //ngIF = Untuk memakai kondisi if di form error
}
