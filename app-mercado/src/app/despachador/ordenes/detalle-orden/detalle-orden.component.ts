import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { OrdenService } from 'src/app/cliente/shared/orden.service';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {

  orden: any;
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
        this.orden = data;
        this.dataSource = new MatTableDataSource(data['items']);
      });
    });
  }

  ngOnInit(): void {
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

}
