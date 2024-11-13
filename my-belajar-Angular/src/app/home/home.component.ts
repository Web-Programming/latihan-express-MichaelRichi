import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: "Citra Grand City",
      city: "Palembang",
      state: "Sumsel",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTta7Pk3A7e0JkMLOgt16mr34t9_QMa2J99UQ&s",
      availableUnits: 12,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: "Citra Land",
      city: "Palembang",
      state: "Sumsel",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTta7Pk3A7e0JkMLOgt16mr34t9_QMa2J99UQ&s",
      availableUnits: 12,
      wifi: true,
      laundry: true
    },
  ]
}
