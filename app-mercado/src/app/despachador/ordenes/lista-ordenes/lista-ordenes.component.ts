import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/cliente/shared/orden.model';
import { OrdenService } from 'src/app/cliente/shared/orden.service';
import { DespachadorService } from '../../shared/despachador.service';

@Component({
  selector: 'app-lista-ordenes',
  templateUrl: './lista-ordenes.component.html',
  styleUrls: ['./lista-ordenes.component.css'],
})
export class ListaOrdenesComponent implements OnInit {
  id: number;
  displayedColumns: string[] = [
    'id',
    'cliente',
    'telefono',
    'puesto',
    'fecha',
    'estado',
    'accion'
  ];
  dataSource: MatTableDataSource<Order>;

  despachador: any;
  constructor(
    private ordenService: OrdenService,
    private despachadorService: DespachadorService
  ) {
    this.despachadorService
      .getDespachadorById(Number(sessionStorage.getItem('idUsuario')))
      .subscribe((data: any) => {
        this.despachador = data;
      });
    this.getOrdenesPorDespachadorId();
  }

  ngOnInit(): void {}

  getOrdenesPorDespachadorId() {
    this.ordenService
      .getOrdenesByDespachadorIdAndEstadoNotAndEstadoNot(Number(sessionStorage.getItem('idUsuario')),"ATENDIDO","CANCELADO")
      .subscribe((ordenes: any) => {
        this.dataSource = new MatTableDataSource(ordenes);
      });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
