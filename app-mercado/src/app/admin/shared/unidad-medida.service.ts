import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UnidadMedida } from './unidadMedida.model';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {

  private apiBase:string = environment.apiBase;

  constructor(private http: HttpClient) { }

  getUnidadesMedidas(){
    return this.http.get<UnidadMedida[]>(`${this.apiBase}/unidades_medidas`);
  }
  create(unidadMedida: UnidadMedida) {
    return this.http.post(`${this.apiBase}/unidades_medidas`, unidadMedida);
  }
  get(id: number){
    return this.http.get<UnidadMedida[]>(`${this.apiBase}/unidades_medidas/${id}`);
  }
  delete(id: number) {
    return this.http.delete(`${this.apiBase}/unidades_medidas/${id}`);
  }
  update(unidadMedida: UnidadMedida) {
    return this.http.put(`${this.apiBase}/unidades_medidas`, unidadMedida);
  }
}
