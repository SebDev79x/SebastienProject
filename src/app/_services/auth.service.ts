import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICredentials } from '../_interfaces/credentials';
import { IToken } from '../_interfaces/token';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8888/auth/login'
  constructor(
    private http: HttpClient) { }
  // Appel API auth/login mais traitement côté composant
  login(credentials: ICredentials): Observable<IToken> {
    // <IToken> => Type générique : on indique le type que l'on compte recevoir
    return this.http.post<IToken>(this.url, credentials)
  }
}
