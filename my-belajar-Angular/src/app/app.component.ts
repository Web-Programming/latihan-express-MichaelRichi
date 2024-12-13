import { Component, Inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { User } from './user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-belajar-Angular';

  router: Router = Inject(Router);
  authService: AuthenticationService = Inject(AuthenticationService);

  public isLoggedIn(): boolean { 
    return this.authService.isLoggedIn();
  }

  public doLogout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');  // Pindah ke halaman login setelah logout
  }

  public getUsername(): string {
    const user : User | null = this.authService.getCurrentUser();
    return user ? user.name : 'Guest';
  }
}
