import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdInterceptorServiceService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = sessionStorage.getItem('tokenDeAcceso');
    if (token != null) {
      intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token)});
    }
    return next.handle(intReq);
  }
}

export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: ProdInterceptorServiceService, multi: true}];