import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Despachador } from 'src/app/auth/shared/despachador.mode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DespachadorService {

  private apiBase:string = environment.apiBase;

  constructor(private http: HttpClient) {
    
   }
   getDespachadoresByEstados(estadoUno: string, estadoDos: string){
    return this.http.get<Despachador[]>(`${this.apiBase}/despachadores/list/by-status/${estadoUno}/or/${estadoDos}`);
  }
  getDespachadorById(id:number){
    return this.http.get<Despachador>(`${this.apiBase}/despachadores/${id}`)
  }

  update(despachador: Despachador) {
    return this.http.put(`${this.apiBase}/despachadores`, despachador);
  }
  delete(id: number) {
    return this.http.delete(`${this.apiBase}/despachadores/${id}`);
  }
  getDespachadores(){
    return this.http.get<Despachador[]>(`${this.apiBase}/despachadores`);
  }
}
