import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogueoService {
  private token:string = "";
  constructor() { }

  isAuth(): boolean{
    return this.token.length > 0 ;
  }

  setToken(token: string): void {
    this.token = token;
  }

  clearToken(): void {
    this.token = "";
  }

}
