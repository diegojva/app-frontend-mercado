import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Puesto } from 'src/app/admin/shared/puesto.model';
import { OrdenService } from '../shared/orden.service';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
  styleUrls: ['./mis-pedidos.component.css']
})
export class MisPedidosComponent implements OnInit {

  fecha:string;
  dataSource: MatTableDataSource<Puesto>;
  displayedColumns: string[] = ['id', 'fecha', 'total','estado','accion'];

  constructor(private ordenService: OrdenService) { }

  ngOnInit(): void {
    this.obtenerPedidos();
  }

  obtenerPedidos(){
    this.ordenService.getOrdenesDTObyClienteId(Number(sessionStorage.getItem('idUsuario'))).subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

}
