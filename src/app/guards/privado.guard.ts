import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../providers/login.service';

@Injectable({
  providedIn: 'root'
})
export class PrivadoGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (!this.loginService.isLogged()) {
        this.router.navigate(["login"]);
        return false;
      }
      return true;
  }
}
