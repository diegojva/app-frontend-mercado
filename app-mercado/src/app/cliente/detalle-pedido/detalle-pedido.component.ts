import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../shared/orden.model';
import { OrdenService } from '../shared/orden.service';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css'],
})
export class DetallePedidoComponent implements OnInit {
  fecha: string;
  id: number;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'id',
    'producto',
    'cantidad',
    'precio',
    'total',
  ];

  constructor(
    private ordenService: OrdenService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = Number(paramMap.get('id'));
      this.ordenService.get(this.id).subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data['items']);
        this.fecha = data['fecha_creacion'];
      });
    });
  }

  ngOnInit(): void {}

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
