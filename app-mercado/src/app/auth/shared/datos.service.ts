import { EventEmitter, Injectable, Output } from '@angular/core';

const AUTHORITIES_KEY ="AuthAuthorities";
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  roles: Array<string>=[];

  @Output() disparadorDeDatos : EventEmitter<any> = new EventEmitter();
  constructor() { }

  public setAuthorities(authorities: string): void {
    sessionStorage.removeItem(AUTHORITIES_KEY);
    sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[]{
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)|| "[]").forEach((authority : any)=> {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }
}
