import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TokenService } from '../_services/token.service';

@Injectable()
// Doit être constamment actif pour vérifier le token contrairement à
/*
@Injectable({
  providedIn: 'root'
}) */
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // 1) Injection TokenService + création getToken dans token Service
    // 2) Création const token à insérer dans le header
    // 3) IMPOSSIBLE DE MODIFIER UNE REQUETE => clonage
    const token = this.tokenService.getToken()
    if (token !== null) {
      let clone = request.clone({
        headers: request.headers.set('Authorization', 'bearer ' + token)
      })
      console.log(clone, "CLOWN");
      return next.handle(clone).pipe(
        catchError((error) => {
          console.log(error);
          if (error.status === 401) {
            this.tokenService.clearTokenExpired()
          }
          return throwError('Session expired')
        })
      )
    }
    return next.handle(request);
  }
}
export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}
