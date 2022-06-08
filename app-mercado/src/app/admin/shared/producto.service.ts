import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiBase:string = environment.apiBase;
  
  constructor(private http: HttpClient) { }

  
  getProductosPorPuestoId(id: number){
    return this.http.get<Producto[]>(`${this.apiBase}/productos/mis-productos/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/productos/${id}`);
  }
  
  create(producto: Producto) {
    return this.http.post(`${this.apiBase}/productos`, producto);
  }

  update(producto: Producto) {
    return this.http.put(`${this.apiBase}/productos`, producto);
  }

  get(id: number) {
    return this.http.get<Producto[]>(`${this.apiBase}/productos/${id}`);
  }

  getAllProductos(){
    return this.http.get<Producto[]>(`${this.apiBase}/productos`);
  }
}
