import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VigilanteDespachadorGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var cookie = false;
      if(sessionStorage.getItem('rol')=='ROLE_EMPLOYEE'){
         cookie = true;
      }else {
        alert('No tienes acceso.')
      }
      return cookie;
  }
  
}
