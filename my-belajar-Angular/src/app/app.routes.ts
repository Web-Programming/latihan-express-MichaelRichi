import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [ 
    {
        path: '', 
        component: HomeComponent, 
        title:'Home Page'
    },
    {
        path: 'details/:id', 
        component: DetailsComponent, 
        title:'Details Page',
        canActivate: [authGuard]
    },
    {
        path:'register',
        component: RegisterComponent,
        title: 'Register Page'
    },
    {
        path:'login',
        component: LoginComponent,
        title: 'Login Page'
    }

];

