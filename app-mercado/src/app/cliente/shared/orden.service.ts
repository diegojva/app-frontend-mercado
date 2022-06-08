import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from './orden.model';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private apiBase:string = environment.apiBase;
  constructor(private http: HttpClient) { }
  getOrders() {
    return this.http.get<Order[]>(`${this.apiBase}/ordenes`);
  }

  getOrdenesByDespachadorId(id:number) {
    return this.http.get<Order[]>(`${this.apiBase}/ordenes/pedidos/by-despachador/${id}`);
  }

  getOrdersByClienteId(id: number) {
    return this.http.get<Order[]>(`${this.apiBase}/ordenes/by-cliente/${id}`);
  }
  getOrdenesDTObyClienteId(id: number) {
    return this.http.get<Order[]>(`${this.apiBase}/ordenes/pedidos-general/by-idCliente/${id}`);
  }

  create(order: Order) {
    return this.http.post(`${this.apiBase}/ordenes`, order);
  }

  get( id:number){
    return this.http.get<Order>(`${this.apiBase}/ordenes/${id}`);
  }

  getOrdenesByDespachadorIdAndEstadoExceptoSinAtender(id: number, estado:string){
    return this.http.get<Order[]>(`${this.apiBase}/ordenes/pedidos/by-id/${id}/no-contains/${estado}`);
  }

  getOrdenesByDespachadorIdAndEstadoNotAndEstadoNot(id: number, estadoUno:string, estadoDos : string){
    return this.http.get<Order[]>(`${this.apiBase}/ordenes/sin-anteder/${id}/status/${estadoUno}/and/${estadoDos}`);
  }

  getOrdenesByDespachadorIdAndEstadoNotAndEstadoNotEstadoNot(id: number, estadoUno:string, estadoDos : string, estadoTres: string){
    return this.http.get<Order[]>(`${this.apiBase}/ordenes/sin-anteder/${id}/status/${estadoUno}/and/${estadoDos}/and/${estadoTres}`);
  }


  getOrdenesByDespachadorIdAndEstado(id:number, estado:string){
    return this.http.get<Order[]>(`${this.apiBase}/ordenes/sin-anteder/${id}/status/${estado}`);
  }

  update(orden: Order) {
    return this.http.put(`${this.apiBase}/ordenes`, orden);
  }

  getOrdersByPuestoId( id:number){
    return this.http.get<Order>(`${this.apiBase}/ordenes/pedidos/by-puesto/${id}`);
  }
}
