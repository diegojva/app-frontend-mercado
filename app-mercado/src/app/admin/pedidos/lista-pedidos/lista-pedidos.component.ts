import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/cliente/shared/orden.model';
import { OrdenService } from 'src/app/cliente/shared/orden.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css'],
})
export class ListaPedidosComponent implements OnInit {
  id: number;
  displayedColumns: string[] = ['id', 'cliente', 'fecha', 'total', 'estado','accion'];
  dataSource: MatTableDataSource<Order>;

  constructor(
    private ordenService: OrdenService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      this.id = Number(paramMap.get('id'));
      this.ordenService.getOrdersByPuestoId(this.id).subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data);    
      });
    });
  }

  ngOnInit(): void {

  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
