import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
}
