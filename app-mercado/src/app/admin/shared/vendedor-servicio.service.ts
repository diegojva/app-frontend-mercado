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

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/puestos/${id}`);
  }

}
