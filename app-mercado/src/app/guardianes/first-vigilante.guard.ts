import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { DatosService } from '../auth/shared/datos.service';

@Injectable({
  providedIn: 'root'
})
export class FirstVigilanteGuard implements CanActivateChild {

  constructor(private cookieService: CookieService, private router: Router,private datosService: DatosService){

  }

  redirect(flag: boolean): any {
    if(!flag) {
      this.router.navigate(['/auth']);
    }
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
     var cookie = false;
    if(sessionStorage.getItem('rol')=='ROLE_ADMIN'){
       cookie = true;
    }else {
      alert('No tienes acceso.')
    }
    return cookie;
  }
  
}
