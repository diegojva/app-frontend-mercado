import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/cliente/shared/orden.model';
import { OrdenService } from 'src/app/cliente/shared/orden.service';

@Component({
  selector: 'app-listar-ordenes-atendidas',
  templateUrl: './listar-ordenes-atendidas.component.html',
  styleUrls: ['./listar-ordenes-atendidas.component.css']
})
export class ListarOrdenesAtendidasComponent implements OnInit {

  id: number;
  displayedColumns: string[] = [
    'id',
    'cliente',
    'telefono',
    'puesto',
    'fecha',
    'estado',
    'accion',
  ];
  dataSource: MatTableDataSource<Order>;

  constructor(private ordenService: OrdenService) { }

  ngOnInit(): void {
    this.getOrdenesByEstadoExceptoSinAtender();
  }

  getOrdenesByEstadoExceptoSinAtender(){
    this.ordenService.getOrdenesByDespachadorIdAndEstadoNotAndEstadoNotEstadoNot(Number(sessionStorage.getItem('idUsuario')),"SIN ATENDER","ARMADO","EN CAMINO").subscribe((ordenes)=>{
      this.dataSource = new MatTableDataSource(ordenes);
    })
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
