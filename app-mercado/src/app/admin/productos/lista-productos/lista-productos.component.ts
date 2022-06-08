import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../shared/producto.model';
import { ProductoService } from '../../shared/producto.service';
import { Puesto } from '../../shared/puesto.model';
import { PuestoService } from '../../shared/puesto.service';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent implements OnInit {
  public idPrueba: any;
  nombreSector: string;
  id: number;
  idSector: any;
  displayedColumns: string[] = [
    'id',
    'nombre',
    'precio',
    'unidadMedida',
    'stock',
    'acciones',
  ];
  dataSource: MatTableDataSource<Producto>;
  dataSourcePuesto: MatTableDataSource<Puesto>;

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private puestoService: PuestoService
  ) {}

  ngOnInit(): void {
    this.obtenerId();
  }

  obtenerId() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.idPrueba = Number(paramMap.get('id'));
      this.id = Number(paramMap.get('id'));
      this.puestoService.getPuestoById(this.id).subscribe((data: any) => {
        this.dataSourcePuesto = data;
        this.nombreSector = this.dataSourcePuesto['sector']['nombre'];

        this.idSector = data['sector'];
      });
      this.productoService
        .getProductosPorPuestoId(Number(paramMap.get('id')))
        .subscribe((data: any) => {
          this.dataSource = new MatTableDataSource(data);
        });
    });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el producto?');
    if (ok) {
      this.productoService.delete(id).subscribe(
        () => {
          this.obtenerId();
        },
        (error) => {
          alert('El producto esta asociado a un pedido.');
        }
      );
    }
  }

  obtenerSector() {
    return this.idSector;
  }
}
