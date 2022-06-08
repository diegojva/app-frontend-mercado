import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Puesto } from 'src/app/admin/shared/puesto.model';
import { PuestoService } from 'src/app/admin/shared/puesto.service';
import { MarketService } from '../shared/market.service';

@Component({
  selector: 'app-lista-puesto-view',
  templateUrl: './lista-puesto-view.component.html',
  styleUrls: ['./lista-puesto-view.component.css']
})
export class ListaPuestoViewComponent implements OnInit {

  id: number;
  nombreMercado: string;
  dataSource: MatTableDataSource<Puesto>;
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'sector','accion'];

  constructor(private activatedRoute: ActivatedRoute
    , private puestoService: PuestoService,
    private mercadoService: MarketService) { 
      this.activatedRoute.paramMap.subscribe(paramMap =>{
        this.mercadoService.get(Number(paramMap.get('id'))).subscribe(
          (data:any)=>{
            this.nombreMercado = data.nombre;
          }
        )
     })
    }

  ngOnInit(): void {
    this.obtenerInfoMercado();
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  obtenerInfoMercado(){
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      this.id = Number(paramMap.get('id'));
      this.puestoService.getPuestosByIdMercadoAndEstado(this.id,'ACTIVO').subscribe(
        (data:any)=>{
          this.dataSource = new MatTableDataSource(data);
        }
      )
   })
  }
}
