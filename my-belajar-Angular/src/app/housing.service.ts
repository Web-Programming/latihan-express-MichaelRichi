import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/housing";
  
  // protected housingLocationList: HousingLocation[] = [
  //   {
  //     id: 0,
  //     name: "Citra Grand City",
  //     city: "Palembang",
  //     state: "Sumsel",
  //     photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTta7Pk3A7e0JkMLOgt16mr34t9_QMa2J99UQ&s",
  //     availableUnits: 12,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 1,
  //     name: "Citra Land",
  //     city: "Palembang",
  //     state: "Sumsel",
  //     photo: "https://cdn.lugc.link/d9447493-deeb-4408-bfd5-a621353fe621/-/preview/278x183/-/format/auto/",
  //     availableUnits: 20,
  //     wifi: true,
  //     laundry: true
  //   },
  // ];

  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? []; 
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`); //http://localhost:3000/housing/1
    return await data.json()?? {};  // null or undefined handling
  }
  submitAplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email);
  }
}
