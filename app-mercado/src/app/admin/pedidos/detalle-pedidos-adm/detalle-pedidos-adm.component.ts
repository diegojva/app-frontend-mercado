import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { OrdenService } from 'src/app/cliente/shared/orden.service';

@Component({
  selector: 'app-detalle-pedidos-adm',
  templateUrl: './detalle-pedidos-adm.component.html',
  styleUrls: ['./detalle-pedidos-adm.component.css'],
})
export class DetallePedidosAdmComponent implements OnInit {
  cliente: any;
  fecha: string;
  id: number;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'id',
    'cliente',
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
        this.cliente = data['cliente']['nombre'];
      });
    });
  }

  ngOnInit(): void {}

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
