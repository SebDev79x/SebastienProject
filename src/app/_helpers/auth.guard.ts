import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../_services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private tokenService: TokenService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.tokenService.tokenExists()) {
      console.log("DANS AUTH GAURD => TOKEN SERVICE RENVOIE : true car ça apparaît");

      return true
    }
    // Si false, guard indique au routeur que la route est inaccessible
    // Là, on redirige l'utilisateur vers la page d'authentification
    // D'où l'intérêt d'avoir créé des modules de façon à bloquer l'accès à des blocs entiers du site
    return this.router.navigate(['auth']);
  }
}
