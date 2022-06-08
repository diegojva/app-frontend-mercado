import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PagoContraEntrega } from './pago-contra-entrega.model';

@Injectable({
  providedIn: 'root'
})
export class PagoContraEntregaService {

  private apiBase:string = environment.apiBase;
  constructor(private http: HttpClient) { }

  create(pagoContraEntrega: PagoContraEntrega) {
    return this.http.post(`${this.apiBase}/pago-contra-entrega`, pagoContraEntrega);
  }

}
