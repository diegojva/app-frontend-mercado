import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mercado } from './market.model';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  private apiBase:string = environment.apiBase;
  constructor(private http :HttpClient) { }

  createMercado(mercado : Mercado) {
    return this.http.post(`${this.apiBase}/mercados`, mercado);
  }
  getAllMercados(){
    return this.http.get<Mercado[]>(`${this.apiBase}/mercados`);
  }
  delete(id: number) {
    return this.http.delete(`${this.apiBase}/mercados/${id}`);
  }
  get(id: number) {
    return this.http.get(`${this.apiBase}/mercados/${id}`);
  }
  update(mercado: Mercado) {
    return this.http.put(`${this.apiBase}/mercados`, mercado);
  }
}
