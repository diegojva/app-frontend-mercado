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
}
