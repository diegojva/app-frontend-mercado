import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiBase:string = environment.apiBase;

  constructor(private http :HttpClient) { }

  getClienteById(id: number){
    return this.http.get(`${this.apiBase}/clientes/${id}`);
  }

  getClientes() {
    return this.http.get<Cliente[]>(`${this.apiBase}/clientes`);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/clientes/${id}`);
  }

  update(cliente: Cliente) {
    return this.http.put(`${this.apiBase}/clientes`, cliente);
  }

}
