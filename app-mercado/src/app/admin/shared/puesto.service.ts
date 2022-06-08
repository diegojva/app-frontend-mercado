import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Puesto } from './puesto.model';

@Injectable({
  providedIn: 'root'
})
export class PuestoService {

  private apiBase:string = environment.apiBase;

  constructor(private http: HttpClient) { }

  getPuestosPorIdVendedor(id: number){
    return this.http.get<Puesto[]>(`${this.apiBase}/puestos/mis-puestos/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/puestos/${id}`);
  }

  update(puesto: Puesto) {
    return this.http.put(`${this.apiBase}/puestos`, puesto);
  }

  create(puesto: Puesto) {
    return this.http.post(`${this.apiBase}/puestos`, puesto);
  }

  getPuestoById(id: number){
    return this.http.get<Puesto[]>(`${this.apiBase}/puestos/${id}`);
  }

  getPuestosByIdMercado(id: number){
    return this.http.get<Puesto[]>(`${this.apiBase}/puestos/mis-puestos/by-mercado/${id}`);
  }

  getPuestosByIdMercadoAndEstado(id: number, estado: string){
    return this.http.get<Puesto[]>(`${this.apiBase}/puestos/mis-puestos/by-mercadoId/${id}/and/by-estado/${estado}`);
  }

}
