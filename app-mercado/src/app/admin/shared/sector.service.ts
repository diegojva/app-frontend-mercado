import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sector } from './sector.model';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private apiBase:string = environment.apiBase;

  constructor(private http: HttpClient) {
    
   }

   getSectores(){
    return this.http.get<Sector[]>(`${this.apiBase}/sectores`);
  }
  delete(id: number) {
    return this.http.delete(`${this.apiBase}/sectores/${id}`);
  }

  create(sector: Sector) {
    return this.http.post(`${this.apiBase}/sectores`, sector);
  }
  get(id: number) {
    return this.http.get(`${this.apiBase}/sectores/${id}`);
  }
  update(sector: Sector) {
    return this.http.put(`${this.apiBase}/sectores`, sector);
  }

}
