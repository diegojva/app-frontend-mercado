import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Market } from 'src/app/cliente/shared/market.model';
import { MarketService } from 'src/app/home/shared/market.service';
import { DespachadorService } from '../../shared/despachador.service';

@Component({
  selector: 'app-lista-mercado-despachador',
  templateUrl: './lista-mercado-despachador.component.html',
  styleUrls: ['./lista-mercado-despachador.component.css']
})
export class ListaMercadoDespachadorComponent implements OnInit {

  despachador: any;
  displayedColumns: string[] = ['id', 'nombre', 'distrito'];
  dataSource: MatTableDataSource<Market>;

  constructor(private router: Router, private mercadoService : MarketService, private despachadorService : DespachadorService) {
    this.despachadorService
    .getDespachadorById(Number(sessionStorage.getItem('idUsuario')))
    .subscribe((data: any) => {
      this.despachador = data;
    });
   }

  ngOnInit(): void {
    this.getMercados();
  }
  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  
  getMercados() {
    this.mercadoService.getAllMercados().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
