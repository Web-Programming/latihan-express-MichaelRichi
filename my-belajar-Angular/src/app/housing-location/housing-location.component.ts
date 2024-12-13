import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{ housingLocation.name }}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <a [routerLink]="['details', housingLocation.id]" *ngIf="isLoggedIn()">Show More</a>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})

export class HousingLocationComponent {
  // housingLocation! untuk null safety (Nama data yang diterima)
  @Input() housingLocation!: HousingLocation
  readonly baseUrl = "https://angular.io/assests/images/tutorials/faa";
  authService: AuthenticationService = Inject(AuthenticationService);

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
