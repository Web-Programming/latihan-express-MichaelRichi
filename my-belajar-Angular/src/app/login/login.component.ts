import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../user';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule], // RouterModule agar bisa ngelink 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formError: String = "";
  loginForm: FormGroup;

  //Inject class Router dan service authentication  
  router: Router = inject(Router);
  authService: AuthenticationService = inject(AuthenticationService); // Inject class AuthenticationService

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public onLoginSubmit(): void{
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('Form submitted', formData);
      //Panggil method loginAuth()
      const user = {... this.loginForm.value} as User;
      this.authService.loginAuth(user).then((res) => {
        if(res.message!=null){
          this.formError = res.message;
        }else if (res.token!=null){
          this.authService.saveToken(res.token);
          this.router.navigateByUrl('/'); //Ketika Login Berhasil Maka Halaman yang dituju Home
        }else {
          this.formError = 'Login Failed Please Try Again';
        }
      })
    
    }else{
      this.formError = 'All fields are required, please try again';
    }
  }
}
