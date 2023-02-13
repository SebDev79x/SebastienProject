import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from './log.service';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router, private logService: LogService) { }
  // SET TOKEN IN LOCAL STORAGE
  saveToken(token: string): void {
    localStorage.setItem('token', token)
    this.router.navigate(['admin'])
  }
  // Is User logged
/*   userIsLogged(){
    const token = localStorage.getItem('token')
   if(token){
    this.logService.setStateButtonLog(true)
   }
   return
  } */
  // Token exists => string or false
  tokenExists(): boolean {
    const token = localStorage.getItem('token')
    // not not  => transforme variable en boolean / si clé token n'existe pas, localS renvoie null, et !! renverra false
    return  !!token
  }
  // REMOVE TOKEN FROM LOCAL STORAGE
  clearToken(): void {
    localStorage.removeItem('token')
    this.router.navigate(['/'])
    this.logService.setStateButtonLog(false)
  }
  // REMOVE EXPIRED TOKEN

  clearTokenExpired(): void {
    localStorage.removeItem('token')
    this.router.navigate(['auth'])
    this.logService.setStateButtonLog(false)
  }
  // Récupération token
  getToken(): string | null {
    // Renvoie string ou null
    return localStorage.getItem('token')
  }
}
