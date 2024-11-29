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
  submitAplication(firstName: string, lastName: string, email: string) : Promise<any>{
    //console.log(firstName, lastName, email);
    const apiUrl = "http://localhost:3000/insert/register";
    const data = fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email
      })
    });
    return data.then(response => {
      if(!response.ok){
        throw new Error("Submit Application Failed");
      }else{
        alert("Submit Application Success");
      }
      return response.json();
    });
  }
}
