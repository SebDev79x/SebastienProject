import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8888/users'

  constructor(private http: HttpClient) { }
  /* LISTE USERS */
  getUsers() {
    // Appel API users mais traitement côté composant
    return this.http.get(this.url)
  }

}

