import { Inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Auth } from './auth';
import { BROWSER_STORAGE } from './storage';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage) { }
  url = "http://localhost:3000";
  async submitRegister(registerdata : FormGroup) : Promise<Auth>{
    const input = {
      name : registerdata.value.name,
      email : registerdata.value.email,
      password : registerdata.value.password
    }
    const data = await fetch(`${this.url}/users/register`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({... registerdata.value}) // Mempersingkat
      // Fungsi ... Untuk mengambil objek value dari register data
    });
    return await data.json() ?? {};
  }

  // Untuk Kebutuhan Login agar komunikasi dengan backend
  async loginAuth(user: User) : Promise<Auth>{
    const data = await fetch(`${this.url}/users/login`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user) // Interface User diubah jadi string
      // Fungsi... Untuk mengambil objek value dari user
    });
    return await data.json()?? {};
  }
  // Untuk Mengambil Token
  public getToken() : any {
    // any  = Menerima semua tipe yang ada
    // JWT yang didapat dalam proses Login dan register nanti tersimpan
    // di local storage dengan key app token
    return this.storage.getItem('app-token');
  }

  // Untuk Menyimpan Token
  public saveToken(token: string): void{
    // disimpan token dari login/register di key app token
    this.storage.setItem('app-token', token);
  }

  public isLoggedIn(): boolean {
    // Cek Berdasarkan token
    const token = this.getToken();
    if(token){
      // Bagian JWT = algoritma, payload
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now()/1000);
    }else{
      return false;
    }
  }

  public logout(): void{
    // Menghapus Token di Local Storage
    this.storage.removeItem('app-token');
  }

  public getCurrentUser(): User |null {
    if(this.isLoggedIn()){
      const token = this.getToken();
      const { email, name} = JSON.parse(atob(token.split('.')[1]));
      return { email, name} as User;
    }else {
      return null;
    }
  }
}
