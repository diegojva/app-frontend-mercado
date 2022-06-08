import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Market } from './market.model';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  /*createMercado(mercado: Market) {
    return this.http.post(`${this.apiBase}/mercados`, mercado);
  }*/
  getAllMercados() {
    return this.http.get<Market[]>(`${this.apiBase}/mercados`);
  }
  /*delete(id: number) {
    return this.http.delete(`${this.apiBase}/mercados/${id}`);
  }*/
  get(id: number) {
    return this.http.get(`${this.apiBase}/mercados/${id}`);
  }
  getByPuestoId(id: number) {
    return this.http.get(`${this.apiBase}/mercados/by-puesto/${id}`);
  }
}
