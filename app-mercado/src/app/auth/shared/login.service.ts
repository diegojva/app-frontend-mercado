import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Administrador } from './adm.model';
import { Despachador } from './despachador.mode';
import { NuevoCliente } from './nuevoCliente.model';
import { NuevoVendedor } from './nuevoVendedor.model';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) { }

  loginUsuario(usuario: Usuario) {
    return this.http.post(`${this.apiBase}/auth`, usuario);
  }
  getVendedor(id: number) {
    return this.http.get(`${this.apiBase}/vendedores/${id}`);
  }

  registrarVendedor(vendedor: NuevoVendedor){
    return this.http.post(`${this.apiBase}/vendedores`, vendedor);
  }

  registrarCliente(cliente: NuevoCliente){
    return this.http.post(`${this.apiBase}/clientes`, cliente);
  }

  registrarDespachador(despachador: Despachador){
    return this.http.post(`${this.apiBase}/despachadores`, despachador);
  }
  registrarAdm(administrador: Administrador){
    return this.http.post(`${this.apiBase}/adm`, administrador);
  }
}
