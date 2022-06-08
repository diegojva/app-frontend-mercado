import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rol } from './rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private apiBase:string = environment.apiBase;

  constructor(private http :HttpClient) { }

  create(rol: Rol) {
    return this.http.post(`${this.apiBase}/rol/nuevo-rol/`, rol);
  }

  update(rol: Rol) {
    return this.http.put(`${this.apiBase}/rol/update`, rol);
  }

  get(id: number){
    return this.http.get(`${this.apiBase}/rol/obtener-rol/${id}`);
  }
  getRoles(){
    return this.http.get<Rol[]>(`${this.apiBase}/rol/listar-roles`);
  }
  delete(id: number) {
    return this.http.delete(`${this.apiBase}/rol/${id}`);
  }
}
