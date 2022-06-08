import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Puesto } from './puesto.model';
import { Vendedor } from './vendedor.model';

@Injectable({
  providedIn: 'root'
})
export class VendedorServicioService {

  private apiBase:string = environment.apiBase;
  
  constructor(private http: HttpClient) { }

  getVendedores(){
    return this.http.get<Vendedor[]>(`${this.apiBase}/vendedores`);
  }
  
  /*?*/
  delete(id: number) {
    return this.http.delete(`${this.apiBase}/vendedores/${id}`);
  }

  getVendedorPorPuestoId(id: number){
    return this.http.get<Vendedor>(`${this.apiBase}/vendedores/by-puesto/${id}`);
  }

  get(id: number) {
    return this.http.get(`${this.apiBase}/vendedores/${id}`);
  }

  update(vendedor: Vendedor) {
    return this.http.put(`${this.apiBase}/vendedores`, vendedor);
  }

}
